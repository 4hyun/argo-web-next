import { memo } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import tw from "twin.macro"
import { slide as Menu } from "react-burger-menu"
import { Close } from "components/Icons"
import { ELASTIC_MENU_EID } from "configs"
import { default as navMenuData } from "./data"
import { logoCircleDarkUrl } from "components/Brand"

const SlidingMenu = styled(Menu)`
  ${tw`w-screen! md:(w-3/12)! bg-argo-blue-700`}
`

const MenuHeader = styled.div`
  ${tw`flex! w-full justify-end`}
`

const LogoCircleDark = memo(styled.div`
  ${tw`w-8 h-8`}
  :after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
  background: center / contain no-repeat url(${logoCircleDarkUrl});
`)

const CloseButton = memo(
  styled(Close)`
    ${tw`cursor-pointer text-off-white fill-current my-auto w-6 h-6`}
  `
)

const NavMenuList = styled.ul`
  ${tw`flex! flex-col pt-1`}
`

const NavMenuItemWrapper = styled.div`
  ${tw`w-full space-x-4`}
`

const A = styled.a`
  @media (min-width: 1024px) {
    --margin-offset: -1rem;
    margin-left: var(--margin-offset);
    margin-right: var(--margin-offset);
  }
  ${tw`flex text-2xl rounded-md text-off-white font-bold px-2 py-2 lg:(active:(transform translate-y-1) transform transition-transform hover:(scale-105) text-3xl px-6 py-4)`}
  & > svg {
    ${tw`my-auto`}
  }
  font-family: Poppins;
`

const NavMenu = ({ children, isOpen, onClose }) => {
  return (
    <SlidingMenu
      right
      isOpen={isOpen}
      outerContainerId={ELASTIC_MENU_EID}
      onClose={onClose}>
      <MenuHeader>
        <CloseButton
          onClick={onClose} />
      </MenuHeader>
      {children}
    </SlidingMenu>
  )
}

export { NavMenu, NavMenuList, A, NavMenuItemWrapper, navMenuData, LogoCircleDark }
