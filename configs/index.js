const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_CMS_BASE_URL
    : process.env.DEV_CMS_BASE_URL;

const STRAPI_AUTH_TOKEN =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_STRAPI_AUTH
    : process.env.DEV_STRAPI_AUTH;
const headers = { Authorization: `Bearer ${STRAPI_AUTH_TOKEN}` };

const fetchStrapi = (path) =>
  fetch(`${BASE_URL}${path}`, {
    headers,
  });

export { fetchStrapi };
