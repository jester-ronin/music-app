import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PlaylistList from './components/PlaylistList';
import PlaylistDetail from './components/PlaylistDetail';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/playlists" component={<PlaylistList />} />
      <Route path="/playlists/:id" element={<PlaylistDetail />} />
    </Routes>
    
  );
}

export default RoutesComponent;
