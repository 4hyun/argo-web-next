import React from "react"
import Link from "next/link"
/* modules */
import styled from "styled-components"
import tw from "twin.macro"
/* lib */
import { fetchStrapi, getStrapiAuthToken, paths as apiPaths } from "lib/api/strapi"
/* components */
import { ArrowLeftCircle } from "components/Icons"
import { PostContent } from "components/Blog"
import TableOfContents from "components/Blog/TableOfContents"

const FallbackContainer = styled.div`
  ${tw`w-full pt-24 lg:(pt-40) min-h-screen flex justify-center items-center`}
`

const Container = styled.div`
  ${tw`w-full pt-24 pb-24 lg:(pt-40) min-h-screen`}
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
  ${tw`text-argo-blue-400 cursor-pointer`}
  &:hover {
    ${tw`text-off-white fill-current`}
  }
`

const MainHeading = styled.div`
  ${tw`flex flex-col py-4 space-y-4`}
`

const PostPage = ({ post, slug }) => {
  return (
    <Container>
      <ContentWrapper>
        <MainHeading>
          <Link href="/blog">
            <a tw="w-max p-1 rounded-full transition-colors hover:(bg-argo-blue-400)">
              <BackButton size={32} />
            </a>
          </Link>
          <BlogTitle>{title}</BlogTitle>
          {/* <TableOfContents /> */}
          <MainHeadingFooter>
            <PostDate>{postDate.toLocaleDateString("ko-KR").slice(0, -1)}</PostDate>
            <Author>{`${firstname} ${lastname}`}</Author>
          </MainHeadingFooter>
        </MainHeading>
        <PostContent>{content}</PostContent>
      </ContentWrapper>
    </Container>
  )
}

export default PostPage

export async function getStaticProps({ params, query }) {
  const { slug } = params
  const strapiUser = { identifier: process.env.STRAPI_ID, password: process.env.STRAPI_PW }
  const token = process.env.PROD_STRAPI_AUTH || (await getStrapiAuthToken(strapiUser, process.env.NODE_ENV, process.env.DEV_STRAPI_AUTH))
  const path = `/blog-posts?slug=${slug}`
  const res = await fetchStrapi(path, token)
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
  const strapiUser = { identifier: process.env.STRAPI_ID, password: process.env.STRAPI_PW }
  const token = process.env.PROD_STRAPI_AUTH || (await getStrapiAuthToken(strapiUser, process.env.NODE_ENV, process.env.DEV_STRAPI_AUTH))
  const res = await fetchStrapi(apiPaths.getBlogPosts.url, token)
  const posts = await res.json()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}
