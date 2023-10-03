import './App.css';
import Header from './components/Header';
import PlaylistList from './components/PlaylistList';
import PlaylistDetail from './components/PlaylistDetail';
import { Route, Routes, Link } from "react-router-dom"
import MainPlaylist from './components/MainPlaylist';


function App() {
  return (
    <>
      <nav>
        <Header />
        <ul>
          <li><Link to="/playlist">All playlists</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/playlist" element={<PlaylistList />} />
        <Route path="/playlist/:id" element={<PlaylistDetail />} />
        <Route path="/playlist/all" element={<MainPlaylist />} />
      </Routes>
    </>
  );
}

export default App;
