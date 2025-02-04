import Items from './Items';
import Icons from './Icons';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

function Navbar() {
  return (
    <NavbarContainer>
      <Items></Items>
      <Icons></Icons>
    </NavbarContainer>
  )
}

export default Navbar;