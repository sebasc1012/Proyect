/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { QUIRES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
      <CloseBotton onClick={onDismiss}>
        <Icon id="close"/>
        <VisuallyHidden>
        Dismiss menu
        </VisuallyHidden>
        </CloseBotton>
      <Filler/>
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <LinkSmall href="/terms">Terms and Conditions</LinkSmall>
        <LinkSmall href="/privacy">Privacy Policy</LinkSmall>
        <LinkSmall href="/contact">Contact Us</LinkSmall>
      </Footer>
      </Content>
   
    </Overlay>
  );
};

const Overlay= styled(DialogOverlay)`
display:flex;
justify-content:flex-end;
position:fixed;
right:0;
left:0;
top:0;
bottom:0
background:hsl(220deg, 5% 40% / 0.8);
`
const Content= styled(DialogContent)`
background:white;
height:100%
width:300px;
display:flex;
flex-direction:column;
padding:32px;
`

const Nav =styled.nav`
display:flex;
flex-direction:column;
gap:15px;
`

const NavLink=styled.a`
color:${COLORS.gray[900]};
font-weight:${WEIGHTS.medium};
text-decoration:none;
font-size:1.25rem;
text-trasform:uppercase

&:first-of-type{
  color:${COLORS.secondary}
}
`

const Footer =styled.footer`
flex:1;
display:flex;
flex-direction:column;
justify-content:flex-end;
`

const LinkSmall=styled.a`
color:${COLORS.gray[700]}
gap:14px;
text-decoration:none
font-size:0.75rem;

`

const CloseBotton=styled(UnstyledButton)`
position:absolute;
top:10;
right:0;
padding:16px;
`

const Filler=styled.div`
flex:1;
`

export default MobileMenu;
