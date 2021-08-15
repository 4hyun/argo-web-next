import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const Wrapper = styled.div`
  ${tw`flex w-max font-post text-white font-bold bg-argo-blue-400 rounded-full py-2 px-4 md:px-6 cursor-pointer hover:(filter drop-shadow-lg)`}
`

const Tag = ({ name, onClick }) => {
  return <Wrapper onClick={onClick}>{name}</Wrapper>
}

export default Tag

Tag.defaultProps = {
  name: "TagName",
}
