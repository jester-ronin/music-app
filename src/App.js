import './App.css';
import {  Route, Routes, useLocation } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PlaylistList from './components/playlistList/PlaylistList';
import PlaylistDetail from './components/playlistDetail/PlaylistDetail';
import MainPlaylist from './components/mainPlaylist/MainPlaylist';


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
          <Routes>
            <Route path="/" element={<PlaylistList />} />
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
