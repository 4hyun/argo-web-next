import React from "react"
import Link from "next/link"
import styled from "styled-components"
import tw from "twin.macro"
import { useRouter } from "next/router"
import { fetchStrapi } from "lib/api"
import { ArrowLeftCircle } from "components/Icons"

const FallbackContainer = styled.div`
  ${tw`w-full pt-24 lg:(pt-40) min-h-screen flex justify-center items-center`}
`

const Container = styled.div`
  ${tw`w-full pt-24 lg:(pt-40) min-h-screen`}
`
const ContentWrapper = styled.div`
  max-width: 800px;
  ${tw`mx-auto px-6`}
`

const ContentBody = styled.p`
  ${tw`text-base leading-loose`}
`

const BlogTitle = styled.h1`
  ${tw`text-4xl font-bold mb-6`}
`

const MainHeadingFooter = styled.div`
  ${tw`flex space-x-4`}
`

const PostDate = styled.span`
  font-weight: 500;
  ${tw`text-lg`}
  :after {
    margin-left: 1rem;
    content: "•";
  }
`

const Author = styled.span`
  ${tw`text-lg`}
`

const BackButton = styled(ArrowLeftCircle)`
  ${tw`text-argo-blue-400 mb-4`}
`

const MainHeading = styled.div`
  ${tw`flex flex-col py-4`}
`

const PostPage = ({ post }) => {
  const { id, title, content, firstname, lastname, email, published_at } = post
  const postDate = new Date(published_at)
  return (
    <Container>
      <ContentWrapper>
        <MainHeading>
          <Link href="/blog">
            <a>
              <BackButton size={32} />
            </a>
          </Link>
          <BlogTitle>{title}</BlogTitle>
          <MainHeadingFooter>
            <PostDate>{postDate.toLocaleDateString("ko-KR").slice(0, -1)}</PostDate>
            <Author>{`${firstname} ${lastname}`}</Author>
          </MainHeadingFooter>
        </MainHeading>
        <ContentBody>{content}</ContentBody>
      </ContentWrapper>
    </Container>
  )
}

export default PostPage

export async function getStaticProps({ params, query }) {
  const { slug } = params
  const path = `/blog-posts?slug=${slug}`
  const res = await fetchStrapi(path)
  const post = await res.json()

  return {
    props: {
      post: post[0],
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 3600, // In seconds
  }
}

export async function getStaticPaths() {
  const contentURL = `/blog-posts`
  const res = await fetchStrapi(contentURL)
  const posts = await res.json()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}
