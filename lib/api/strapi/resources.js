import { fetchStrapi } from "./fetch-strapi"

export const listenPaths = {
  Prices: "/price-models",
  Posts: "/blog-posts",
  Auth: "/auth",
  Tags: "/tags",
  Homepage: "/home-page",
}

const resources = {
  Prices: { listenpath: listenPaths.Prices, methods: { List: { url: "" } } },
  Posts: {
    listenpath: listenPaths.Posts,
    methods: { List: { url: "" }, ListLatest: { url: "?_sort=published_at:DESC&_limit=5" } },
  },
  Auth: { listenpath: listenPaths.Auth, methods: { Authenticate: { url: "/local" } } },
  Tags: {
    listenpath: listenPaths.Tags,
    methods: { List: { url: "" } },
  },
  Homepage: { listenpath: listenPaths.Homepage, methods: { Get: { url: "" } } },
}

const resourceMethods = {
  List: "GET",
  Latest: "GET",
  Authenticate: "POST",
  Get: "GET",
}

export const fetchResource = (resourceName, method, fetchInit = {}) => {
  const resource = resources[resourceName]
  if (!(method in resource.methods)) {
    throw new Error(`fetchResrouceCallback() Error: method ${method} in resource ${resourceName} does not exists or is not supported.`)
  }
  const { listenpath } = resource
  const resourcePath = `${listenpath}${resource.methods[method].url}`
  console.log(">> fetchResource() resourcePath: ", resourcePath)
  return fetchStrapi(resourcePath, {
    method: resourceMethods[method],
    ...fetchInit,
  })
}

export default resources
