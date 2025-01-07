import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Accueil</Link> | 
      <Link to="/add">Ajouter un Contact</Link>
    </nav>
  );
}

export default NavBar;
