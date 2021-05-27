import tw, { styled } from "twin.macro"
import { slide as SlidingMenu } from "react-burger-menu"
import { MENU_EID } from "configs"
import { default as menuData } from "./data"
import { logoCircleDarkUrl } from "components/Brand"

const LogoCircleDark = styled.div`
  ${tw`w-20 float-right`}
  :after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
  background: center / contain no-repeat url(${logoCircleDarkUrl});
`

const StyledMenu = styled(SlidingMenu)`
  width: 300px;
`

const MenuItemA = tw.a`text-xl text-white font-bold`

const MenuList = styled.ul`
  ${tw`flex! flex-col space-y-4 pt-1`}
`

const Menu = ({ children, isOpen, onClose }) => {
  return (
    <StyledMenu right isOpen={isOpen} outerContainerId={MENU_EID} onClose={onClose}>
      <LogoCircleDark />
      {children}
    </StyledMenu>
  )
}

export { Menu, MenuItemA, MenuList, menuData }
