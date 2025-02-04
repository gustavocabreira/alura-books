import './style.css';
import Logo from "../Logo";
import Navbar from "../Navbar";


function Header() {
  return (
    <header className="App-header">
      <Logo></Logo>
      <Navbar></Navbar>
    </header>
  )
}

export default Header;