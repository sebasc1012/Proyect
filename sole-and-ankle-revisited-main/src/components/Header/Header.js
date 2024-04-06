import React from 'react';
import styled from 'styled-components/macro';
import { QUIRES } from "../../constants";
import Icon from "../Icon";
import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <NavDestop>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </NavDestop>

        <MovileIcons>
          <ShoppingIcon>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingIcon>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MovileIcons>
        <Filler />
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  padding: 20px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  align-items: baseline;
  gap: 48px;
  height: 72px;

  @media ${QUIRES.TabletSmall} {
    display: flex;
    justify-content: space-between;
    border-top: solid 4px ${COLORS.gray[900]};
  }

  @media ${QUIRES.PhoneSmall} {
    padding: 16px 20px;
  }
`;

const NavDestop = styled.nav`
  display: flex;
  flex: 1;
  margin: 0 48px;
  gap: 50px;

  @media ${QUIRES.LaptopSmall} {
    display: none;
  }
`;

const MovileIcons = styled.div`
  display: none;

  @media ${QUIRES.TabletSmall} {
    display: flex;
    align-items: center;
    gap: 37px;
  }

  @media ${QUIRES.PhoneSmall} {
    gap: 16px;
  }
`;

const ShoppingIcon = styled(UnstyledButton)`
  trasform: translateX(-2px);
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUIRES.TabletSmall} {
    flex:revert;
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUIRES.TabletSmall} {
    display: none;
  }
`;

export default Header;
