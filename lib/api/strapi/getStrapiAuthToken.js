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
<<<<<<< HEAD
    console.log(`error authenticating user:${strapiUser.identifier}`)
=======
    console.log(`error authenticating user:${user.identifier}`)
>>>>>>> c65e92d23e929b8baa1df1032fc8d66b77d1344e
  }

  return data.jwt
}

export { getStrapiAuthToken }
