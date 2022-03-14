import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`xl:ml-10 select-none flex flex-col justify-center xl:justify-start xl:mr-4`}
  width: 90%;
  padding: 0 1rem;
  margin: 0 auto;
  @media (min-width: 400px) {
    width: 85%;
  }
  @media (min-width: 1200px) {
    padding: unset;
    height: 338px;
  }
`

export default Container
