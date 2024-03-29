import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Navbar from 'components/Navbar';
import { Menu, A, MenuList, menuData } from '@/components/Menu';
import { OpenLinkArrow } from 'components/Icons';
import { ELASTIC_MENU_EID } from 'configs';

const Wrapper = styled(motion.div)``;

const Spacer = styled.div`
  ${tw`h-full w-2`}
`;
const icons = { openLinkArrow: OpenLinkArrow };

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(null);
  return (
    <Wrapper
      id={ELASTIC_MENU_EID}>
      <Menu
        isOpen={menuOpen}
        onClose={closeMenu}>
        <MenuList>
          {/* <Logo /> */}
          {menuData.map(({ item: { mid, title, url, icon, target } }) => {
            let Icon = icons[icon];
            if (mid === 1)
              return (
                <Link
                  key={mid}
                  href={`${url}`}
                  passHref>
                  <A
                    onClick={closeMenu}
                    target={target || '_self'}>
                    {title}
                  </A>
                </Link>
              );
            return (
              <Link
                key={mid}
                href={`${url}`}
                passHref>
                <A
                  onClick={closeMenu}
                  target={target || '_self'}>
                  {title}
                  <Spacer />
                  {Icon && <Icon
                    size={28} />}
                </A>
              </Link>
            );
          })}
        </MenuList>
      </Menu>
      <Navbar
        menuOpen={menuOpen}
        toggleMenu={toggleMenu} />
    </Wrapper>
  );
};

export default Header;
