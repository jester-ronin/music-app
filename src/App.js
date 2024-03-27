import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PlaylistList from './components/playlistList/PlaylistList';
import PlaylistDetail from './components/playlistDetail/PlaylistDetail';
import MainPlaylist from './components/mainPlaylist/MainPlaylist';

function App() {

  
  return (
    <Router>
      <div className="main-container">
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
    </Router>
  );
}

export default App;
