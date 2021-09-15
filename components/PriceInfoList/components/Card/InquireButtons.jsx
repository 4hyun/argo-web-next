import styled from "styled-components"
import tw from "twin.macro"

const StyledButton = styled.button`
  ${tw`bg-off-white flex font-bold text-gray-800 font-poppins`};
  font-style: normal;
`

/* Wrappers */
const DesktopInquireButtonWrapper = styled.div`
  ${tw`hidden xl:(flex flex-col flex-grow items-end)`}
`

const MobileInquireButtonWrapper = styled.div`
  ${tw`flex mt-5 sm:(mt-4) xl:(hidden)`}
`

/* Buttons */
const BaseInquireButton = styled(StyledButton)`
  ${tw`rounded-full text-base outline-none! focus:outline-none active:outline-none transform transition-all active:translate-x-1 active:translate-y-1`}
`

const DesktopPriceInquireButton = styled(BaseInquireButton).attrs(({ className }) => ({ className }))`
  ${tw`flex w-full justify-center py-3 duration-75`}
  &.lemon {
    ${tw`hover:(ring-4 ring-argo-lemon-400)`}
  }
  &.coral {
    ${tw`hover:(ring-4 ring-argo-coral-400)`}
  }
  &.pink {
    ${tw`hover:(ring-4 ring-argo-pink-400)`}
  }
  &.lavender {
    ${tw`hover:(ring-4 ring-argo-lavender-400)`}
  }
`

const MobilePriceInquireButton = styled(BaseInquireButton)`
  ${tw`flex-grow-0 w-min px-4 py-2 mt-5 sm:(mt-6) xl:(hidden)`}
`

export { MobilePriceInquireButton, DesktopPriceInquireButton, DesktopInquireButtonWrapper, MobileInquireButtonWrapper }
