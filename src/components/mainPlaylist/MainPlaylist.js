import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addSong } from '../../Redusers/songActions';
import { useSelector } from 'react-redux';
import { selectSongs } from '../../Redusers/songReducer';
import { removeSong } from '../../Redusers/songActions';
import SongsList from '../songsList/SongsList';
import './mainPlaylist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



function MainPlaylist() {
    const [showModal, setShowModal] = useState(false);
    const [artistName, setArtistName] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [songYear, setSongYear] = useState('');
    const [songDescription, setSongDescription] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);


    const dispatch = useDispatch();
    const songs = useSelector(selectSongs);

    const handleSave = () => {
        if (!artistName || !songTitle) {
            console.log("empty values");
            alert('The artist name and track title must be entered')
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

    const handleRemove = (song) => {
        dispatch(removeSong(song))
    }


    return (
        <div>
            <img id='main-playlist-image' src='https://upload.wikimedia.org/wikipedia/it/thumb/1/1a/All_Music_logo.svg/1200px-All_Music_logo.svg.png' alt="main-playlist" />
            <div className="fab-container">
                <button className="fab-button" onClick={() => setShowModal(true)}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                </Modal>
            </div>

            <SongsList songs={songs} onRemoveSong={handleRemove} />


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new song</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className={`form-control ${!artistName && isInvalid ? 'is-invalid' : artistName ? 'is-valid' : ''}`}
                        placeholder='Enter artist name'
                        required
                        value={artistName}
                        onChange={(e) => {
                            setArtistName(e.target.value);
                            setIsInvalid(!e.target.value);
                        }}
                    />

                    <input
                        type="text"
                        className={`form-control ${!songTitle && isInvalid ? 'is-invalid' : songTitle ? 'is-valid' : ''}`}
                        placeholder='Enter song title'
                        required
                        value={songTitle}
                        onChange={(e) => {
                            setSongTitle(e.target.value);
                            setIsInvalid(!e.target.value);
                        }}
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
