// const BASE_URL = process.env.NODE_ENV === "production" ? process.env.PROD_CMS_BASE_URL : process.env.DEV_CMS_BASE_URL
// const headers = { Authorization: `Bearer ${process.env.DEV_strapi_auth}` }

// const fetchStrapi = (path) =>
//   fetch(`${BASE_URL}${path}`, {
//     headers,
//   })

module.exports = {
  // exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  //   const contentURL = "/blog-posts"
  //   const res = await fetchStrapi(contentURL)
  //   const posts = await res.json()
  //   console.log(">>DEBUG defaultPathMap: ")
  //   const pathToPosts = posts.reduce((acc, { id, slug }) => {
  //     acc[`/p/${slug}`] = {
  //       page: `/blog/post/[id]`,
  //       query: { id },
  //     }
  //     return acc
  //   }, {})
  //   console.log(">>DEBUG pathToPosts: ", pathToPosts)
  //   return {
  //     "/": { page: "/" },
  //     "/blog": { page: "/blog" },
  //     ...pathToPosts,
  //   }
  // },
  // async redirects() {
  //     const contentURL = "/blog-posts"
  //     const res = await fetchStrapi(contentURL)
  //     const posts = await res.json()
  // let _redirects = []
  //     posts.forEach(({slug,id}) => _redirects.push({source:`/p/${slug}`, destination:`/blog/post/${id}`}))
  //     return [
  //       {
  //         source: '/old-blog/:slug',
  //         destination: '/news/:slug', // Matched parameters can be used in the destination
  //         permanent: true,
  //       },
  //     ]
  //   },
}
