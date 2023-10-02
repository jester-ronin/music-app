import './App.css';
import Header from './components/Header';
import PlaylistList from './components/PlaylistList';
import PlaylistDetail from './components/PlaylistDetail';
import { Route, Routes, Link } from "react-router-dom"


function App() {
  return (
    <>
      <nav>
        <Header />
        <ul>
          <li><Link to="/playlist">Playlists</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/playlist" element={<PlaylistList />} />
        <Route path="/playlist/:id" element={<PlaylistDetail />} />
      </Routes>
    </>
  );
}

export default App;
