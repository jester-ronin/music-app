import './App.css';
import Header from './components/Header';
import PlaylistList from './components/PlaylistList';
import MainPage from './components/MainPage';
import PlaylistDetail from './components/PlaylistDetail';
import { Route, Routes, Link } from "react-router-dom"

function App() {
  
  return (
    <>
      <nav>
        <Header/>
        <ul>
          <li><Link to="/mainpage">Home</Link></li>
          <li><Link to="/playlist">Playlists</Link></li>
          <li><Link to="/playlist/1">Playlists</Link></li>
          <li><Link to="/playlist/2">Playlists</Link></li>
          <li><Link to="/playlist/3">Playlists</Link></li>

          
        </ul>
      </nav>
      <Routes>
        <Route path='/mainpage' element={<MainPage />} />
        <Route path="/playlist" element={<PlaylistList />} />
        <Route path="/playlist/:id" element={<PlaylistDetail />} />
      </Routes>
    </>
  );
}

export default App;
