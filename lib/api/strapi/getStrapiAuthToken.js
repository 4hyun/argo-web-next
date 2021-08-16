import { BASE_URL } from "@/configs/index.js"
import paths from "./paths"

const PROD_STRAPI_AUTH = "PROD_STRAPI_AUTH"

const getStrapiAuthToken = async (strapiUser, NODE_ENV, DEV_STRAPI_AUTH) => {\
  const TAG = "[ARGO-WEB-NEXT]  getStrapiAuthToken()"
  const isProduction = NODE_ENV === "production"
  if (isProduction) {
    if (process.env.PROD_STRAPI_AUTH) {
      console.log(`${TAG} / process.env.PROD_STRAPI_AUTH is already set [2]: ${process.env.PROD_STRAPI_AUTH}`)
      return
    }
    if( PROD_STRAPI_AUTH in global ) {
      console.log(`${TAG} reusing PROD_STRAPI_AUTH from global: ${global.PROD_STRAPI_AUTH}`)
      return global.PROD_STRAPI_AUTH
    }
  }

  if (!isProduction && DEV_STRAPI_AUTH) return DEV_STRAPI_AUTH
  if (!isProduction && !DEV_STRAPI_AUTH) throw new Error(`NODE_ENV is "${NODE_ENV}", but DEV_STRAPI_AUTH is invalid: ${DEV_STRAPI_AUTH}`)

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
    // set global[PROD_STRAPI_AUTH]
    try {
      console.log(`${TAG}/msg: BEFORE setting global[PROD_STRAPI_AUTH]: ${data.jwt}`)
      global[PROD_STRAPI_AUTH] = data.jwt
    } catch (error) {
      console.log(`${TAG}/error setting global[PROD_STRAPI_AUTH]`)
    }
    try {
      if (process.env.PROD_STRAPI_AUTH) {
        console.log(`${TAG} / process.env.PROD_STRAPI_AUTH is already set [2]: ${process.env.PROD_STRAPI_AUTH}`)
        return
      }
      console.log(`${TAG}/msg: BEFORE setting process.env.PROD_STRAPI_AUTH: ${data.jwt}`)
      process.env.PROD_STRAPI_AUTH = data.jwt
    } catch (error) {
      console.log(`${TAG}/error setting process.env.PROD_STRAPI_AUTH`)
      throw error
    }
  } catch (error) {
    console.log(`${TAG}/error authenticating user:${strapiUser.identifier}`)
  }

  return data.jwt
}

export { getStrapiAuthToken }
