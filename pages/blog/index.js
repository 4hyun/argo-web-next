import React from "react"
import tw, { styled } from "twin.macro"
import { fetchStrapi } from "lib/api"
import { BlogCard } from "components/Blog"

const Container = styled.div`
  max-width: 1200px;
  ${tw`w-full pt-24 lg:(pt-40) min-h-screen px-6 mx-auto`}
`

const ContentWrapper = styled.div`
  ${tw`container mx-auto`}
`

const PageHeading = styled.h1`
  ${tw`container mx-auto text-3xl font-bold`}
`
const PostList = styled.ul`
  ${tw`flex flex-col md:(flex-row) mt-4`}
`

const BlogMainPage = ({ posts }) => {
  return (
    <Container>
      <PageHeading>Blog</PageHeading>
      <ContentWrapper>
        {posts.map((blogProps) => (
          <PostList>
            <BlogCard {...blogProps} key={blogProps.id} />
          </PostList>
        ))}
      </ContentWrapper>
    </Container>
  )
}

export default BlogMainPage

// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const path = "/blog-posts"
  const res = await fetchStrapi(path)
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
