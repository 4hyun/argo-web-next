import React from "react"
import Link from "next/link"
import styled from "styled-components"
import tw from "twin.macro"

const H2 = styled.h2`
  ${tw`text-xl font-black mb-3 leading-normal border-b-2  border-transparent hover:(border-argo-blue-400)`}
`

const AuthorLabel = styled.p`
  ${tw`text-xs`}
`
const PublishedAt = styled.span`
  ${tw`text-xs`}
`

const Wrapper = styled.article`
  ${tw`rounded-lg bg-white p-6 shadow-lg hover:shadow-xl`}
  ${AuthorLabel},${PublishedAt} {
    ${tw`leading-none`}
  }
`

const Card = ({ id, title, content, firstname, lastname, email, published_at, slug }) => {
  const postDate = new Date(published_at)
  return (
    <Wrapper>
      <H2>
        <Link href={`blog/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </H2>
      {/* <div>{content}</div> */}
      <AuthorLabel>{`by ${firstname} ${lastname}`}</AuthorLabel>
      <PublishedAt>{postDate.toLocaleDateString("ko-KR").slice(0, -1)}</PublishedAt>
    </Wrapper>
  )
}

export default Card
