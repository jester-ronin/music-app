import './header.css'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


function Header() {
  return (
    <nav className="navbar navbar-dark custom-header">
      <ul>
        <li>
          <Button id='main-playlist-link'><Link to="/playlist">All playlists</Link></Button>
        </li>
      </ul>
      <div className="footer-container">
        <span className="navbar-brand mb-0 h1">
          Моя Шапка
        </span>
      </div>
    </nav>
  );
}

export default Header;

