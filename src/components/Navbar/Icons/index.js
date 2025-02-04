import styled from 'styled-components';
import profile from '../../../images/perfil.svg';
import bag from '../../../images/sacola.svg';

const icons = [
  profile,
  bag,
];

const IconsContainer = styled.ul`
  display: flex;
  align-items: center;
`

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`

function Icons() {
  return (
    <IconsContainer>
      {icons.map((icon, index) => (
        <Icon key={index} className="icon">
          <img src={icon} alt="icon" />
        </Icon>
      ))}
    </IconsContainer>
  )
}

export default Icons;