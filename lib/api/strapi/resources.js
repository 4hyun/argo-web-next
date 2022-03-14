import fetchStrapi from "./fetch-strapi"

export const listenPaths = {
  Prices: "/price-models",
  Posts: "/blog-posts",
  Auth: "/auth",
  Tags: "/tags",
  Homepage: "/home-page",
}

const resources = {
  Prices: { listenpath: listenPaths.Prices, methods: { List: { url: "/price-models" } } },
  Posts: {
    listenpath: listenPaths.Posts,
    methods: { List: { url: "/blog-posts" }, Latest: { url: "/blog-posts?_sort=published_at:DESC&_limit=5" } },
  },
  Auth: { listenpath: listenPaths.Auth, methods: { Authenticate: { url: "/auth/local" } } },
  Tags: {
    listenpath: listenPaths.Tags,
    methods: { List: { url: "/tags" } },
  },
  Homepage: { listenpath: listenPaths.Homepage, methods: { Get: { url: "/home-page" } } },
}

const resourceMethods = {
  List: "GET",
  Latest: "GET",
  Authenticate: "POST",
  Get: "GET",
}

export const fetchResource = (resourceName, method, fetchInit = {}) => {
  if (!(method in resourceName)) {
    throw new Error(`fetchResrouceCallback() Error: method ${method} in resource ${resourceName} does not exists or is not supported.`)
  }
  const { listenpath } = resources
  const resourceUrl = `${listenpath}/${resourceName.methods[method].url}`
  return fetchStrapi(resourceUrl, {
    method: resourceMethods[method],
    ...fetchInit,
  })
}

export default resources
