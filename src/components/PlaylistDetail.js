import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { selectPlaylistById } from '../Redusers/playlistReducer';
import { addSongToPlaylist, removeSongFromPlaylist } from "../Redusers/playlistActions";
import SongsList from "./SongsList";
import { Dropdown } from 'react-bootstrap';
import { selectSongs } from '../Redusers/songReducer';

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
          <h2>Playlist: {playlist.name}</h2>
          <p>Description: {playlist.description}</p>
          <SongsList songs={playlist.songs} onRemoveSong={handleRemoveSong} />

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Song
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {songs.map((song) => (
                <Dropdown.Item
                  key={song.id}
                  onClick={() => setSelectedSong(song)}
                >
                  {song.artist + " - "}
                  {song.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <button onClick={handleAddSong}>Add Song</button>
        </div>
      ) : (
        <p>Playlist not found</p>
      )}
    </div>
  );
}

export default PlaylistDetail;
