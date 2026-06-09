import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Sistema React</h2>

      <div>
        <Link to="/">Início</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/listagem">Listagem</Link>
      </div>
    </nav>
  );
}

export default Navbar;