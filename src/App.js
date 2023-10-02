import './App.css';
import Header from './components/Header';
import PlaylistList from './components/PlaylistList';
import { Route, Routes, Link } from "react-router-dom"

function App() {

    return (
      <>
        <nav>
          <Header />
          <ul>
            <li><Link to="/playlist">Playlists</Link></li>
            <li><Link to="/playlist/1">Playlist1</Link></li>
            <li><Link to="/playlist/2">Playlist2</Link></li>
            <li><Link to="/playlist/3">Playlist3</Link></li>


          </ul>
        </nav>
        <Routes>
          <Route path="/playlist" element={<PlaylistList />} />
        </Routes>

      </>
    );
  }

  export default App;
