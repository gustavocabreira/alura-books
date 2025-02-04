import './style.css';
import profile from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';

const navigationItems = [
  'CATEGORIAS',
  'FAVORITOS',
  'MINHA ESTANTE',
];

const icons = [
  profile,
  bag,
];

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="options">
        {navigationItems.map((item, index) => (
          <li key={index} className="option">{item}</li>
        ))}
      </ul>
      <ul className="icons">
        {icons.map((icon, index) => (
          <li key={index} className="icon">
            <img src={icon} alt="icon" />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;