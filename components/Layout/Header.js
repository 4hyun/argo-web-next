import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Navbar from "components/Navbar"
import { Menu, MenuItemA, MenuList, menuData } from "../Menu"
import { OpenLinkArrow } from "components/Icons"

const Wrapper = styled.div``

const Spacer = styled.div`
  ${tw`h-full w-2`}
`
const icons = { openLinkArrow: OpenLinkArrow }

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(null)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(null)
  return (
    <Wrapper id="argo-elastic-menu">
      <Menu isOpen={menuOpen} onClose={closeMenu}>
        <MenuList>
          {/* <Logo /> */}
          {menuData.map(({ item: { mid, title, slug, icon, target } }) => {
            let Icon = icons[icon]
            return (
              <Link key={mid} href={`${slug}`} passHref>
                <MenuItemA onClick={closeMenu} target={target || "_self"}>
                  {title}
                  <Spacer />
                  {Icon && <Icon size={28} />}
                </MenuItemA>
              </Link>
            )
          })}
        </MenuList>
      </Menu>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </Wrapper>
  )
}

export default Header
