import { BASE_URL, headers } from "@/configs/index.js"

const fetchStrapi = (path) => {
  console.log(">>DEBUG BASE_URL deploy error: ", BASE_URL)
  return fetch(`${BASE_URL}${path}`, {
    headers,
  })
}

export { fetchStrapi }
