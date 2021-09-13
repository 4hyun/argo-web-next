import { BASE_URL } from "@/configs/index.js"

const fetchStrapi = (path, token) => {
  if (!token) throw new Error(`argo-web/fetchStrapi: Error invalid token of value ${token}`)
  const headers = { Authorization: `Bearer ${token}` }
  return fetch(`${BASE_URL}${path}`, {
    headers,
  })
}

export { fetchStrapi }
