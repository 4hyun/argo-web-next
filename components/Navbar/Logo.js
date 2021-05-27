import tw, { styled } from "twin.macro"
import DarkLogo from "../../public/logos/lettermark/logo-full_white-long-sm.svg"

const Logo = styled(DarkLogo)`
  ${tw`w-auto`}
  ${tw`lg:(h-full px-0)`}
`

export default Logo
