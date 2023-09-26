import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PlaylistList from './components/PlaylistList';
import SongList from './components/SongsList';
import App from './App';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="*" component={<App/>} />
      <Route path="/playlists" component={<PlaylistList />} />
    </Routes>
    
  );
}

export default RoutesComponent;
