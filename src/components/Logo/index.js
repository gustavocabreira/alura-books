import logo from '../../images/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  margin-right: 30px;
`

const Image = styled.img`
  margin-right: 10px;
`

function Logo() {
  return (
    <LogoContainer>
      <Image src={logo} alt="logo"/>
      <p><strong>Alura</strong>Books</p>
    </LogoContainer>
  )
}

export default Logo;