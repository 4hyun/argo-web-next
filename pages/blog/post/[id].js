import React from "react"
import tw, { styled } from "twin.macro"
import { useRouter } from "next/router"
import { fetchStrapi } from "lib/api"
/* components */
import { H2 } from "components/Blog"

const FallbackContainer = styled.div`
  ${tw`w-full bg-gray-50 pt-24 lg:(pt-40) min-h-screen flex justify-center items-center`}
`

const Container = styled.div`
  ${tw`w-full bg-gray-50 pt-24 lg:(pt-40) min-h-screen`}
`
const ContentWrapper = styled.div`
  ${tw`container mx-auto px-6`}
`

const ContentBody = styled.p`
  ${tw`text-base`}
`

const PostPage = ({ post }) => {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <FallbackContainer>Loading...</FallbackContainer>
  } else {
    const { id, title, content, firstname, lastname, email, published_at } = post
    return (
      <Container>
        <ContentWrapper>
          <H2>{title}</H2>
          <ContentBody>{content}</ContentBody>
        </ContentWrapper>
      </Container>
    )
  }
}

export default PostPage

export async function getStaticProps({ params, query }) {
  const { id } = params
  const path = `/blog-posts/${id}`
  const res = await fetchStrapi(path)
  const post = await res.json()

  return {
    props: {
      post,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 3600, // In seconds
  }
}

export async function getStaticPaths() {
  // const path = `/blog-posts/${id}`
  // const res = await fetchStrapi(path)
  // const post = await res.json()
  return {
    paths: [],
    fallback: true,
  }
}
