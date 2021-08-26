import tw, { styled } from "twin.macro"
import { fetchStrapi, getStrapiAuthToken, paths } from "lib/api/strapi"
import { BlogCard, PostList } from "components/Blog"

const Container = styled.div`
  max-width: 1200px;
  ${tw`w-full pt-24 pb-20 lg:(pt-40) min-h-screen lg:(px-0) px-6  mx-auto`}
`

const ContentWrapper = styled.div`
  ${tw`container mx-auto mt-8`}
`

const PageHeading = styled.h1`
  ${tw`container mx-auto text-3xl font-black`}
`

const authorInfoConfig = {
  showDate: true,
}

const BlogMainPage = ({ posts }) => {
  return (
    <Container>
      <PageHeading>Blog</PageHeading>
      <ContentWrapper>
        {posts && (
          <PostList tw="space-y-6" col>
            {posts.map((blogProps) => (
              <BlogCard {...blogProps} key={blogProps.id} authorInfoConfig={authorInfoConfig} />
            ))}
          </PostList>
        )}
      </ContentWrapper>
    </Container>
  )
}

export default BlogMainPage

// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const strapiUser = { identifier: process.env.STRAPI_ID, password: process.env.STRAPI_PW }
  const token = process.env.PROD_STRAPI_AUTH || (await getStrapiAuthToken(strapiUser, process.env.NODE_ENV, process.env.DEV_STRAPI_AUTH))
  const params = "?_sort=published_at:DESC"
  const res = await fetchStrapi(paths.getBlogPosts.url + params, token)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
