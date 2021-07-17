export const BASE_URL = process.env.NODE_ENV === "production" ? process.env.PROD_CMS_BASE_URL : process.env.DEV_CMS_BASE_URL

// export const STRAPI_AUTH_TOKEN = process.env.NODE_ENV === "production" ? process.env.PROD_STRAPI_AUTH : process.env.DEV_STRAPI_AUTH

export const getStrapiURL = (path = "") => {
  return `${BASE_URL}${path}`
}

export const MENU_EID = "argo-elastic-menu"
