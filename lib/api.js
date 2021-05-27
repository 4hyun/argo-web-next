import { BASE_URL } from "configs"

const headers = { Authorization: `Bearer ${process.env.DEV_strapi_auth}` }

const fetchStrapi = (path) =>
  fetch(`${BASE_URL}${path}`, {
    headers,
  })

export { fetchStrapi }
