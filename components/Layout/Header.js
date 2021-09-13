import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Navbar from "components/Navbar"
import { NavMenu, A, NavMenuList, navMenuData, LogoCircleDark } from "../Menu"
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
      <NavMenu isOpen={menuOpen} onClose={closeMenu}>
        <NavMenuList>
          {/* <Logo /> */}
          {navMenuData.map(({ item: { mid, title, slug, icon, target } }) => {
            let Icon = icons[icon]
            if (mid === 1)
              return (
                <Link key={mid} href={`${slug}`} passHref>
                  <A onClick={closeMenu} target={target || "_self"}>
                    {title}
                  </A>
                </Link>
              )
            return (
              <Link key={mid} href={`${slug}`} passHref>
                <A onClick={closeMenu} target={target || "_self"}>
                  {title}
                  <Spacer />
                  {Icon && <Icon size={28} />}
                </A>
              </Link>
            )
          })}
        </NavMenuList>
      </NavMenu>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </Wrapper>
  )
}

export default Header
