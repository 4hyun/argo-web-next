import resources from "lib/api/resources"

export function makeResourcePath(resourceName, method, query = "") {
  const resource = resources[resourceName]
  const resourceMethod = resource.methods[method]
  if (!resource || !method || !resourceMethod) {
    throw new Error(`resource-utils/makeResourcePath() Error: invalid params(resouceName, method, query) of [${resource}, ${methods}, ${query}]`)
  }
  const { path: resourcePath } = resourceMethod
  const path = typeof resourcePath === "string" && resourcePath.length === 0 ? resource.listenpath : resourcePath
  return `${path}${query}`
}
