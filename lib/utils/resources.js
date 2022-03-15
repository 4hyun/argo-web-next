import resources from "lib/api/resources"
import { urlObjectKeys } from "node_modules/next/dist/shared/lib/utils"

export function makeResourcePath(resourceName, method, query = "") {
  const resource = resources[resourceName]
  if (!resource || !method || !(method in resource.methods)) {
    throw new Error(`resource-utils/makeResourcePath() Error: invalid params(resouceName, method, query) of [${resource}, ${methods}, ${query}]`)
  }
  const { url } = resources[resourceName].methods[method]
  const path = typeof url === "string" && url.length === 0 ? resource.listenpath : url
  return `${path}${query}`
}
