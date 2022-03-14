import styled from "styled-components"
import tw from "twin.macro"

const LayoutTopGradientOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 90px;
  z-index: 11;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%);
  ${tw`lg:hidden!`}
`

export default LayoutTopGradientOverlay
