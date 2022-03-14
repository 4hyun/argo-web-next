import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Tag from "components/Tag"

const Wrapper = styled.div`
  ${tw`flex flex-wrap	justify-center items-center gap-y-2 gap-x-2 mb-4`}
`

const HomeBlogTags = ({ tagsList }) => {
  return (
    <Wrapper>
      {tagsList.map(({ id, name }) => (
        <Tag
          key={id}
          name={name} />
      ))}
    </Wrapper>
  )
}

export default HomeBlogTags
