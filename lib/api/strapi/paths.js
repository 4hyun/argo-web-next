const paths = {
  getPriceList: { url: "/price-models" },
  getLatestPosts: { url: "/blog-posts?_sort=published_at:DESC&_limit=5" },
  auth: { url: "/auth/local" },
  getBlogPosts: { url: "/blog-posts" },
  getTagsList: { url: "/tags" },
  getHomePageData: { url: "/home-page" },
}

export default paths
