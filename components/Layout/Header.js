import Link from "next/link"
import { useState } from "react"
import { styled } from "twin.macro"
import Navbar from "components/Navbar"
import { Menu, MenuItemA, MenuList, menuData } from "../Menu"

const Wrapper = styled.div``

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(null)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(null)
  return (
    <Wrapper id="argo-elastic-menu">
      <Menu isOpen={menuOpen} onClose={closeMenu}>
        <MenuList>
          {/* <Logo /> */}
          {menuData.map(({ item: { mid, title, slug } }) => (
            <Link key={mid} href={`/${slug}`} passHref>
              <MenuItemA onClick={closeMenu}>{title}</MenuItemA>
            </Link>
          ))}
        </MenuList>
      </Menu>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </Wrapper>
  )
}

export default Header
