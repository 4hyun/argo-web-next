import { BASE_URL } from "@/configs/index.js"
import paths from "./paths"

const getStrapiAuthToken = async (strapiUser, NODE_ENV, DEV_STRAPI_AUTH) => {
  /* TODO: if process.env.NODE_ENV === 'development' return
  token from environment variable 
 */
  if (NODE_ENV === "development" && DEV_STRAPI_AUTH) return DEV_STRAPI_AUTH
  if (NODE_ENV === "development" && !DEV_STRAPI_AUTH) throw new Error(`NODE_ENV is "${NODE_ENV}", but DEV_STRAPI_AUTH is invalid: ${DEV_STRAPI_AUTH}`)
  if (NODE_ENV === "production") console.log("[ARGO-WEB-NEXT]getStrapiAuthToken()/NODE_ENV: ", NODE_ENV)
  let res, data
  const url = `${BASE_URL}${paths.auth.url}`
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(strapiUser),
    })
    data = await res.json()
  } catch (error) {
    console.log(`error authenticating user:${strapiUser.identifier}`)
  }

  return data.jwt
}

export { getStrapiAuthToken }
