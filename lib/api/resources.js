import { fetchStrapi } from "lib/api/strapi/fetch-strapi"

export const listenPaths = {
  Prices: "/price-models",
  Posts: "/blog-posts",
  Auth: "/auth",
  Tags: "/tags",
  Homepage: "/home-page",
}

const resources = {
  Prices: { listenpath: listenPaths.Prices, methods: { List: { path: "" } } },
  Posts: {
    listenpath: listenPaths.Posts,
    methods: { List: { path: "" }, ListLatest: { path: "?_sort=published_at:DESC&_limit=5" } },
  },
  Auth: { listenpath: listenPaths.Auth, methods: { Authenticate: { path: "/local" } } },
  Tags: {
    listenpath: listenPaths.Tags,
    methods: { List: { path: "" } },
  },
  Homepage: { listenpath: listenPaths.Homepage, methods: { Get: { path: "" } } },
}

const resourceMethods = {
  List: "GET",
  Latest: "GET",
  Authenticate: "POST",
  Get: "GET",
}

export const fetchResource = (resourceName, method, fetchInit = {}) => {
  let resourcePath
  const resource = resources[resourceName]
  const resourceMethod = resource.methods[method]
  if (!resourceMethod) {
    throw new Error(`fetchResrouceCallback() Error: method ${method} in resource ${resourceName} does not exists or is not supported.`)
  }
  const { listenpath } = resource
  resourcePath = `${listenpath}${resource.methods[method].path}`
  console.log(">> fetchResource() resourcePath: ", resourcePath)
  return fetchStrapi(resourcePath, {
    method: resourceMethods[method],
    ...fetchInit,
  })
}

export default resources