import './App.css';
import StyleCheck from './StyleCheck';
import PlaylistList from './components/PlaylistList';
import MainPage from './components/MainPage';
import { Route, Routes, Link } from "react-router-dom"

function App() {
  return (
    <>
      <nav>
        <StyleCheck/>
        <ul>
          <li><Link to="/mainpage">Home</Link></li>
          <li><Link to="/playlist">Playlists</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/mainpage' element={<MainPage />} />
        <Route path="/playlist" element={<PlaylistList />} />
      </Routes>
    </>
  );
}

export default App;
