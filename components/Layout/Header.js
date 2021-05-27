import Link from "next/link"
import { useState } from "react"
import { styled } from "twin.macro"
import Navbar from "components/Navbar"
import { Menu, MenuItemA, MenuList, menuData } from "../Menu"

const Wrapper = styled.div``

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(null)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  return (
    <Wrapper id="argo-elastic-menu">
      <Menu isOpen={menuOpen} onClose={toggleMenu}>
        <MenuList>
          {/* <Logo /> */}
          {menuData.map(({ item: { mid, title, slug } }) => (
            <Link key={mid} href={`/${slug}`} passHref>
              <MenuItemA>{title}</MenuItemA>
            </Link>
          ))}
        </MenuList>
      </Menu>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </Wrapper>
  )
}

export default Header
