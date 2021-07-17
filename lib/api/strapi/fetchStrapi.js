import { BASE_URL } from "@/configs/index.js"

const fetchStrapi = (path, token) => {
  const headers = { Authorization: `Bearer ${token}` }
  return fetch(`${BASE_URL}${path}`, {
    headers,
  })
}

export { fetchStrapi }
