import './App.css';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PlaylistList from './components/playlistList/PlaylistList';
import PlaylistDetail from './components/playlistDetail/PlaylistDetail';
import { Route, Routes, Link } from "react-router-dom";
import MainPlaylist from './components/mainPlaylist/MainPlaylist';
import { Button } from 'react-bootstrap';


function App() {

  const location = useLocation();
  let containerClassName = ""
  if (location.pathname === "/playlist/all") {
    containerClassName = "playlist1-bg";
  } else if (location.pathname.includes("/playlist/")) {
    containerClassName = "playlist1-bg";
  }
  

  return (
    <div className={`main-container ${containerClassName}`} >
      <Header />
      <div className="container">
        <ul>
          <li>
            <Button id='main-playlist-link'><Link to="/playlist">All playlists</Link></Button>
          </li>
        </ul>
        <CSSTransition in={true} appear={true} classNames="fade" timeout={300}>
          <Routes>
            <Route path="/" element={<PlaylistList />} />
            <Route path="/playlist" element={<PlaylistList />} />
            <Route path="/playlist/:id" element={<PlaylistDetail />} />
            <Route path="/playlist/all" element={<MainPlaylist />} />
          </Routes>
        </CSSTransition>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
