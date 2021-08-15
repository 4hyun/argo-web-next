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

const AuthorInfoContainer = styled.div`
  ${tw`flex flex-col`}
`

const HOVERED = "hovered"
const HOVERED_ACTIVE = "hovered-active"

const Wrapper = styled.article`
  ${tw`rounded-lg p-6 hover:(shadow-lg) transform md:(max-w-3xl) transition-all ring-1 ring-argo-lavender-400`}
  ${AuthorLabel},${PublishedAt} {
    ${tw`leading-none`}
  }
  &.hovered,
  &.hovered-active {
    ${tw`ring-4 ring-argo-lavender-400`}
  }
  &.hovered-active {
    ${tw`translate-y-1`}
  }
`

const CLASSNAME = "blogcard"
export const CARD_CLASSNAME = "." + CLASSNAME

const Card = ({ id, title, content, firstname, lastname, email, published_at, slug, wrapper = Wrapper, showAuthor }) => {
  const Wrapper = wrapper
  const [cardHoverClass, setCardHoverClass] = useState(null)
  const handleCardHovered = () => setCardHoverClass(HOVERED)
  const handleCardMouseLeave = () => setCardHoverClass(null)
  const handleCardHoverActive = () => setCardHoverClass(HOVERED_ACTIVE)
  const postDate = new Date(published_at)
  return (
    <Link href={`blog/post/${slug}`}>
      <a>
        <Wrapper
          cardHoverClass={cardHoverClass}
          className={`${CLASSNAME} ${cardHoverClass && cardHoverClass}`}
          onMouseEnter={handleCardHovered}
          onMouseLeave={handleCardMouseLeave}
          onMouseDown={handleCardHoverActive}
        >
          <H2>
            <a>{title}</a>
          </H2>
          {/* <div>{content}</div> */}
          {showAuthor && (
            <AuthorInfoContainer>
              <AuthorLabel>{`by ${firstname} ${lastname}`}</AuthorLabel>
              <PublishedAt>{postDate.toLocaleDateString("ko-KR").slice(0, -1)}</PublishedAt>
            </AuthorInfoContainer>
          )}
        </Wrapper>
      </a>
    </Link>
  )
}

export default Card
