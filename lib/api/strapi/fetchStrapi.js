import { BASE_URL, headers } from "@/configs/index.js"

const fetchStrapi = (path) => {
  return fetch(`${BASE_URL}${path}`, {
    headers,
  })
}

export { fetchStrapi }
