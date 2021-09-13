import React from "react"
import trads from "translations"
import Container from "./Container"
import Slogan from "./Slogan"
import Heading from "./Heading"
import CTAMessage from "./CTAMessage"
import { GetInTouchButton, LearnMoreButton } from "./Buttons"

const ComingSoonMessage = ({ locale, handleGetInTouchButtonClick }) => {
  return (
    <Container>
      <Slogan>{trads[locale]["comingsoon.components.Slogan.tyk"]}</Slogan>
      <Heading>{trads[locale]["comingsoon.components.Heading.main"]}</Heading>
      <CTAMessage
        className="leading-none font-normal mt-4">{trads[locale]["comingsoon.components.Slogan.ctamessage"]}</CTAMessage>
      <div
        className="coming-soon-action-button-container flex space-x-3 lg:space-x-0 mt-5">
        <GetInTouchButton
          onClick={handleGetInTouchButtonClick}
          aria-label="Inquire about Tyk API Gateway">
          {trads[locale]["comingsoon.components.EmailInputContainer.button.getintouch"]}
        </GetInTouchButton>
        <a
          href="https://tyk.io/docs/getting-started/tyk-components/gateway/"
          target="_blank"
          rel="noreferrer">
          <LearnMoreButton
            aria-label="Learn More about Tyk API Gateway">
            {trads[locale]["comingsoon.components.EmailInputContainer.button.learnmoreaboutyk"]}
          </LearnMoreButton>
        </a>
      </div>
    </Container>
  )
}

export default ComingSoonMessage
