import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`flex flex-col px-6 xl:px-0 xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8`}
  @media (max-width: 1024px) {
    & {
      justify-content: space-between;
    }
  }
`

export default Container
