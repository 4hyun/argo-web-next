import React from "react"
import { createGlobalStyle } from "styled-components"
import tw, { GlobalStyles as BaseStyles } from "twin.macro"
import { styles as slidingMenuStyles } from "components/Menu/styles"

const CustomStyles = createGlobalStyle`
  ${slidingMenuStyles}
  * {  
    -webkit-tap-highlight-color: transparent;
    ${tw`antialiased`};
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
