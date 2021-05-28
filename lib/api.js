import { BASE_URL, headers } from "../configs"

const fetchStrapi = (path) =>
  fetch(`${BASE_URL}${path}`, {
    headers,
  })

export { fetchStrapi }
