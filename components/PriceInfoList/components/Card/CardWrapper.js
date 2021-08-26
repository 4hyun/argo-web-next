import styled from "styled-components"
import tw from "twin.macro"

const CardWrapper = styled.div`
  ${tw`flex flex-row xl:flex-col flex-grow shadow-lg xl:space-y-5 px-8 xl:px-10 py-10 rounded-xl focus:outline-none -ml-4! xl:(transition-transform duration-75 transform hover:(scale-110 z-20))`}
  & {
    flex-basis: 0;
  }
  &.lemon {
    ${tw`bg-gradient-to-br from-argo-lemon-100 to-argo-lemon-200`}
  }
  &.coral {
    ${tw`bg-gradient-to-br from-argo-coral-100 to-argo-coral-200`}
  }
  &.pink {
    ${tw`bg-gradient-to-br from-argo-pink-100 to-argo-pink-200`}
  }
  &.lavender {
    ${tw`bg-gradient-to-br from-argo-lavender-100 to-argo-lavender-200`}
  }
  @media (min-width: 1024px) {
    min-width: 225px;
  }
`

export default CardWrapper
