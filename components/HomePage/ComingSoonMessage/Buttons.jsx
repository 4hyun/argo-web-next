import styled from "styled-components"
import tw from "twin.macro"
import { default as BaseButton } from "components/Button"

const Button = styled(BaseButton)`
  ${tw`flex rounded-full py-2 px-4 md:px-6 hover:border-solid border-2 border-transparent focus:outline-none whitespace-nowrap transition-all transform active:translate-x-1 active:translate-y-1 text-xs`}
  @media (min-width: 401px) {
    ${tw`text-base`}
  }
`

export const GetInTouchButton = styled(Button)`${tw`lg:hidden`}`
export const LearnMoreButton = Button

export default Button
