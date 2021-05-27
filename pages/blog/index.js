import React from "react"
import tw, { styled } from "twin.macro"
import { fetchStrapi } from "lib/api"
import { BlogCard } from "components/Blog"

const Container = styled.div`
  ${tw`w-full bg-gray-50 pt-24 lg:(pt-40) min-h-screen`}
`

const ContentWrapper = styled.div`
  ${tw`container mx-auto px-6`}
`

const PageHeading = styled.h1`
  ${tw`text-3xl font-bold`}
`
const List = styled.ul`
  ${tw`mt-4`}
`

const BlogMainPage = ({ posts }) => {
  return (
    <Container>
      <ContentWrapper>
        <PageHeading>Blog</PageHeading>
        {posts.map((blogProps) => (
          <List>
            <BlogCard {...blogProps} />
          </List>
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
