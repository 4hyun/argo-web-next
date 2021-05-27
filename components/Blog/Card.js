import React from "react"
import Link from "next/link"
import tw, { styled } from "twin.macro"
import { H2 } from "./Heading"

const AuthorLabel = styled.p`
  ${tw`text-xs`}
`
const PublishedAt = styled.span`
  ${tw`text-xs`}
`

const Wrapper = styled.article`
  ${tw`rounded-lg bg-white p-4 shadow-lg`}
  ${AuthorLabel},${PublishedAt} {
    ${tw`leading-tight`}
  }
`

const Card = ({ id, title, content, firstname, lastname, email, published_at, slug }) => {
  return (
    <Wrapper>
      <H2>
        <Link href={{ pathname: "blog/post/[id]", query: { id } }} as={`p/${slug}`}>
          <a>{title}</a>
        </Link>
      </H2>
      {/* <div>{content}</div> */}
      <AuthorLabel>{`by ${firstname} ${lastname}`}</AuthorLabel>
      <PublishedAt>{published_at}</PublishedAt>
    </Wrapper>
  )
}

export default Card
