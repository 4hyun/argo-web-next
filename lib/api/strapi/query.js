const queryList = {
  getPriceList: { url: "/price-models" },
  getLatestPosts: { url: "/blog-posts?_sort=published_at:DESC&_limit=5" },
}

export default queryList
