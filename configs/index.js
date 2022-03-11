/** configs used to set Production | Development modes.
 */
export const BASE_URL = process.env.NODE_ENV === "production" ? process.env.PROD_CMS_BASE_URL : process.env.DEV_CMS_BASE_URL

export const getStrapiURL = (path = "") => {
  return `${BASE_URL}${path}`
}

export const ELASTIC_MENU_EID = "argo-elastic-menu"
