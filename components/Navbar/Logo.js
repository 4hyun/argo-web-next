import tw, { styled } from "twin.macro"
import { LogoFullDarkHorizontal } from "components/Brand"

const Logo = styled(LogoFullDarkHorizontal)`
  ${tw`w-auto`}
  ${tw`lg:(h-full px-0)`}
`

export default Logo
