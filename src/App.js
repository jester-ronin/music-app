import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PlaylistList from './components/playlistList/PlaylistList';
import PlaylistDetail from './components/playlistDetail/PlaylistDetail';
import { Route, Routes, Link } from "react-router-dom";
import MainPlaylist from './components/mainPlaylist/MainPlaylist';

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="container">
        <ul>
          <li><Link to="/playlist">All playlists</Link></li>
        </ul>
        <Routes>
          <Route path="/playlist" element={<PlaylistList />} />
          <Route path="/playlist/:id" element={<PlaylistDetail />} />
          <Route path="/playlist/all" element={<MainPlaylist />} />
        </Routes>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
