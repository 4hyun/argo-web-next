import React from "react"
import tw, { styled } from "twin.macro"
import { fetchStrapi, getStrapiAuthToken, paths } from "lib/api/strapi"
import { BlogCard, PostList } from "components/Blog"

const Container = styled.div`
  max-width: 1200px;
  ${tw`w-full pt-24 lg:(pt-40) min-h-screen lg:(px-0) px-6  mx-auto`}
`

const ContentWrapper = styled.div`
  ${tw`container mx-auto mt-8`}
`

const PageHeading = styled.h1`
  ${tw`container mx-auto text-3xl font-black`}
`

const BlogMainPage = ({ posts }) => {
  return (
    <Container>
      <PageHeading>Blog</PageHeading>
      <ContentWrapper>
        {posts && (
          <PostList tw="space-y-6" col>
            {posts.map((blogProps) => (
              <BlogCard {...blogProps} key={blogProps.id} />
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
  const token = await getStrapiAuthToken(strapiUser)
  const res = await fetchStrapi(paths.getBlogPosts.url, token)
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
