import styled from 'styled-components';

const navigationItems = [
  'CATEGORIAS',
  'FAVORITOS',
  'MINHA ESTANTE',
];

const ItemContainer = styled.ul`
  display: flex;
`

const Item = styled.li`
  min-width: 120px;
  height: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
`

function Items() {
  return (
    <ItemContainer>
      {navigationItems.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </ItemContainer>
  )
}

export default Items;