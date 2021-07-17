import { BASE_URL } from "@/configs/index.js"
import paths from "./paths"

const getStrapiAuthToken = async (strapiUser) => {
  let token, res, data
  const url = `${BASE_URL}${paths.auth.url}`
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(strapiUser),
    })
    data = await res.json()
  } catch (error) {
    console.log(`error authenticating user:${user.identifier}`)
  }

  return data.jwt
}

export { getStrapiAuthToken }
