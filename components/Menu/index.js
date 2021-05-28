import { memo } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { slide as SlidingMenu } from "react-burger-menu"
import { Close } from "components/Icons"
import { MENU_EID } from "configs"
import { default as menuData } from "./data"
import { logoCircleDarkUrl } from "components/Brand"

const StyledMenu = styled(SlidingMenu)`
  ${tw`w-screen! md:(w-3/12)!`}
  background: center / 100% 130% linear-gradient( 161deg,hsl(255deg 100% 27%) 17%,hsl(218deg 100% 34%) 36%,hsl(224deg 97% 36% / 88%) 66%,hsl(177deg 100% 50%) 100% );
`

const MenuHeader = styled.div`
  ${tw`flex! w-full justify-between`}
`

const LogoCircleDark = memo(styled.div`
  ${tw`w-16 mb-8`}
  :after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
  background: center / contain no-repeat url(${logoCircleDarkUrl});
`)

const CloseButton = memo(
  styled(Close)`
    ${tw`cursor-pointer`}
  `
)

const MenuList = styled.ul`
  ${tw`flex! flex-col pt-1`}
`

const MenuItemWrapper = styled.div`
  ${tw`w-full space-x-4`}
`

const MenuItemA = styled.a`
  @media (min-width: 1024px) {
    --margin-offset: -1rem;
    margin-left: var(--margin-offset);
    margin-right: var(--margin-offset);
  }
  ${tw`flex text-2xl rounded-md text-white font-bold px-2 py-2 lg:(active:(transform translate-y-1) hover:(bg-argo-blue-400) text-3xl px-8 py-5)`}
  & > svg {
    ${tw`my-auto`}
  }
`

const Menu = ({ children, isOpen, onClose }) => {
  return (
    <StyledMenu right isOpen={isOpen} outerContainerId={MENU_EID} onClose={onClose}>
      <MenuHeader>
        <LogoCircleDark />
        <CloseButton size={32} color="#fff" onClick={onClose} />
      </MenuHeader>
      {children}
    </StyledMenu>
  )
}

export { Menu, MenuList, MenuItemA, MenuItemWrapper, menuData }
