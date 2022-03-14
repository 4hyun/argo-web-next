import { BASE_URL } from "@/configs/index.js"
import { getStrapiAuthToken } from "./get-strapi-auth-token"

let token

const fetchStrapi = async (path, fetchInit = {}) => {
  if (!token) {
    try {
      const user = { identifier: process.env.STRAPI_ID, password: process.env.STRAPI_PW }
      token = await getStrapiAuthToken(user, process.env.NODE_ENV, process.env.DEV_STRAPI_AUTH)
      console.log(`argo/fetchStrapi() token: successfully fetched token: ${token.substring(0, 8)}...`)
    } catch (error) {
      throw new Error(`argo/fetchStrapi() Error: invalid token of value ${token}`)
    }
  }
  const { headers, ...fetchInitRest } = fetchInit
  const headersMerged = { Authorization: `Bearer ${token}`, ...headers }
  return fetch(`${BASE_URL}${path}`, {
    headers: headersMerged,
    ...fetchInitRest,
  })
}

export { fetchStrapi }
