import React, { useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import tw from "twin.macro"

const H2 = styled.h2`
  ${tw`text-xl font-black mb-3 leading-normal`}
`

const AuthorLabel = styled.p`
  ${tw`text-xs`}
`
const PublishedAt = styled.span`
  ${tw`text-xs`}
`

const Wrapper = styled.article`
  ${tw`rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transform md:(max-w-3xl)`}
  ${AuthorLabel},${PublishedAt} {
    ${tw`leading-none`}
  }
  &.hovered,
  &.hovered-active {
    ${tw`ring-4 ring-argo-blue-400`}
  }
  &.hovered-active {
    ${tw`translate-y-2`}
  }
`

const Card = ({ id, title, content, firstname, lastname, email, published_at, slug, wrapper = Wrapper }) => {
  const Wrapper = wrapper
  const [cardHoverClass, setCardHoverClass] = useState(null)
  const handleCardHovered = () => setCardHoverClass("hovered")
  const handleCardMouseLeave = () => setCardHoverClass(null)
  const handleCardHoverActive = () => setCardHoverClass("hovered-active")
  const postDate = new Date(published_at)
  return (
    <Wrapper className={`${cardHoverClass && cardHoverClass}`}>
      <H2 onMouseEnter={handleCardHovered} onMouseLeave={handleCardMouseLeave} onMouseDown={handleCardHoverActive}>
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
