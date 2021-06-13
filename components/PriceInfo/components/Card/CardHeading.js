import styled from "styled-components"
import tw from "twin.macro"
import { MobilePriceInquireButton } from "./InquireButtons"

/* utils */
import { specialHeadingParser } from "../../utils"

const Container = styled.div`
  ${tw`flex flex-col flex-grow xl:flex-grow-0 xl:block space-y-3`}
`

const Heading = styled.h3`
  ${tw`leading-tight w-full text-3xl font-black whitespace-pre-line`}
`

const CardHeading = ({ heading, onClickMobileInquireButton, inquireButtonTextLabel }) => (
  <Container>
    <Heading>{specialHeadingParser(heading)}</Heading>
    <MobilePriceInquireButton
      onClick={() => {
        onClickMobileInquireButton()
      }}
    >
      {inquireButtonTextLabel}
    </MobilePriceInquireButton>
  </Container>
)

export default CardHeading
