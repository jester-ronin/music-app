import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addSong } from '../Redusers/songActions';
import { useSelector } from 'react-redux';
import { selectSongs } from '../Redusers/songReducer';

function MainPlaylist() {
    const [showModal, setShowModal] = useState(false);
    const [artistName, setArtistName] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [songYear, setSongYear] = useState('');
    const [songDescription, setSongDescription] = useState('');

    const dispatch = useDispatch();
    const songs = useSelector(selectSongs);

    const handleSave = () => {
        if (!artistName || !songTitle || !songYear || !songDescription) {
            console.log("empty values");
            return;
        }

        
        dispatch(addSong({
            artist: artistName,
            title: songTitle,
            year: songYear,
            description: songDescription,
        }));

        setShowModal(false);
    };

    return (
        <div>
            <h2>All Songs</h2>
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Add new song
            </Button>

            <ul>
                {songs.map((song) => {
                    return (
                        <li key={song.id}>
                            <h3>{song.artist}</h3>
                            <h4>{song.title}</h4>
                            <h5>{song.year}</h5>
                            <p>Description: {song.description}</p>
                        </li>
                    )
                })}
            </ul>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new song</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Enter artist name'
                        required
                        value={artistName}
                        onChange={(e) => setArtistName(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Enter song title'
                        required
                        value={songTitle}
                        onChange={(e) => setSongTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Enter year'
                        required
                        value={songYear}
                        onChange={(e) => setSongYear(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Enter song description'
                        required
                        value={songDescription}
                        onChange={(e) => setSongDescription(e.target.value)}
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MainPlaylist;
