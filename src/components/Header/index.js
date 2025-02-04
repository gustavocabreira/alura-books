import Logo from "../Logo";
import Navbar from "../Navbar";
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo></Logo>
      <Navbar></Navbar>
    </HeaderContainer>
  )
}

export default Header;