export const BASE_URL = process.env.NODE_ENV === "production" ? process.env.PROD_CMS_BASE_URL : process.env.DEV_CMS_BASE_URL

export const STRAPI_AUTH_TOKEN = process.env.NODE_ENV === "production" ? process.env.PROD_STRAPI_AUTH : process.env.DEV_STRAPI_AUTH
const headers = { Authorization: `Bearer ${STRAPI_AUTH_TOKEN}` }

export const getStrapiURL = (path = "") => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`
}

export const fetchStrapi = async (path) => {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl, headers)
  const data = await response.json()
  return data
}

export const MENU_EID = "argo-elastic-menu"
