import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`flex flex-col px-0 sm:(px-6) xl:(px-0 flex-row space-y-0) space-y-8 gap-x-0`}
  @media (max-width: 1024px) {
    & {
      ${"" /* justify-content: space-between; */}
    }
  }
`

export default Container
