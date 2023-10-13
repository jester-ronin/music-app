import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { selectPlaylistById } from '../Redusers/playlistReducer';
import { addSongToPlaylist, removeSongFromPlaylist } from "../Redusers/playlistActions";
import SongsList from "./SongsList";
import { SplitButton, Dropdown } from 'react-bootstrap'; // Импорт компонентов SplitButton и Dropdown из Bootstrap
import { selectSongs } from '../Redusers/songReducer'; // импортируйте selectSongs из вашего редюсера

function PlaylistDetail() {
  const { id } = useParams();
  const playlistId = isNaN(id) ? id : Number(id);
  const playlist = useSelector(state => selectPlaylistById(playlistId, state));
  const [selectedSong, setSelectedSong] = useState(null);
  const dispatch = useDispatch();
  const songs = useSelector(selectSongs);

  const handleAddSong = () => {
    if (selectedSong) {
      dispatch(addSongToPlaylist(playlistId, selectedSong));
      setSelectedSong(null);
    }
  };

  const handleRemoveSong = (songId) => {
    dispatch(removeSongFromPlaylist(playlistId, songId));
  };

  return (
    <div>
      {playlist ? (
        <div>
          <img src={playlist.imageURL} alt={playlist.name} />
          <h2>Playlist: {playlist.name}</h2>
          <p>Description: {playlist.description}</p>
          <SongsList songs={playlist.songs} onRemoveSong={handleRemoveSong} />

          <SplitButton
            title={selectedSong ? `Add: ${selectedSong.artist} - ${selectedSong.title}` : "Add Song"}
            variant="primary"
            onClick={() => handleAddSong(selectedSong)}
            id="split-button-dropdown"
          >
            {songs.map((song) => (
              <Dropdown.Item
                key={song.id}
                onClick={() => setSelectedSong(song)}
              >
                {song.artist + " - " + song.title}
              </Dropdown.Item>
            ))}
          </SplitButton>
        </div>
      ) : (
        <p>Playlist not found</p>
      )}
    </div>
  );
}

export default PlaylistDetail;