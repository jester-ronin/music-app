import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlaylistById } from '../../Redusers/playlistReducer';
import { addSongToPlaylist, removeSongFromPlaylist, setUserPLaylistImage } from '../../Redusers/playlistActions';
import SongsList from '../songsList/SongsList';
import { SplitButton, Dropdown, Modal, Button } from 'react-bootstrap';
import { selectSongs } from '../../Redusers/songReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './playlistDetail.css'


function PlaylistDetail() {
  const { id } = useParams();
  const playlistId = isNaN(id) ? id : Number(id);
  const playlist = useSelector((state) => selectPlaylistById(playlistId, state));
  const [selectedSong, setSelectedSong] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
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

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveImage = () => {
    if (imageUrl === "") {
      alert("Enter your URL")
    } else {
      dispatch(setUserPLaylistImage(playlistId, imageUrl));
      setShowModal(false);
      setImageUrl('');
    }
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handeDeleteImage = () => {
    dispatch(setUserPLaylistImage(playlistId, ''))
    setImageUrl('')
    setShowModal(false)
  };

  return (
    <div>
      {playlist ? (
        <div class="container text-center">
          <img src={playlist.imageURL} alt={playlist.name} />
          <h2>Playlist: {playlist.name}</h2>
          <p>Description: {playlist.description}</p>
          <SongsList songs={playlist.songs} onRemoveSong={handleRemoveSong} />

          <SplitButton
            title={selectedSong ? `Add: ${selectedSong.artist} - ${selectedSong.title}` : 'Add Song'}
            variant="primary"
            onClick={() => handleAddSong(selectedSong)}
            id="split-button-dropdown"
          >
            {songs.map((song) => (
              <Dropdown.Item key={song.id} onClick={() => setSelectedSong(song)}>
                {song.artist + ' - ' + song.title}
              </Dropdown.Item>
            ))}
          </SplitButton>

          <Button variant="primary" onClick={handleShowModal}>
            <FontAwesomeIcon icon={faImage} />
            Change Playlist Image
          </Button>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Change Playlist Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Enter the URL of the new image:</p>
              <input
                id='input'
                type="text"
                value={imageUrl}
                onChange={handleImageUrlChange}
                placeholder="Your image URL"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="danger" onClick={handeDeleteImage}>
                Delete image
              </Button>
              <Button variant="success" onClick={handleSaveImage}>
                Save Image
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <p>Playlist not found</p>
      )}
    </div>
  );
}

export default PlaylistDetail;
