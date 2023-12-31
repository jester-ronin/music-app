import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createPlaylist } from '../../Redusers/playlistActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './addNewPlaylist.css'

function AddNewPlaylist() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [playlistName, setPlaylistName] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSave = (playlistName, playlistDescription) => {
        if (!playlistName) {
            console.log("empty value");
            return;
        }
        dispatch(createPlaylist(playlistName, playlistDescription));
        setPlaylistName('');
        setPlaylistDescription('');
        handleClose();
    };

    return (
        <>
            <div className="fab-container">
                <button className="fab-button" onClick={handleShow}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>

                <Modal show={show} onHide={handleClose}>
                </Modal>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new playlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>Enter name of new playlist</Modal.Body>
                <Modal.Footer>
                    <input
                        type="text"
                        className={`form-control ${isInvalid ? 'is-invalid' : playlistName ? 'is-valid' : ''}`}
                        id="validationServer02"
                        placeholder='Enter name of new playlist'
                        required
                        value={playlistName}
                        onChange={(e) => {
                            setPlaylistName(e.target.value);
                            setIsInvalid(e.target.value === '');
                        }}
                    />
                    <input
                        type="text"
                        className={`form-control`}
                        id="validationServer02"
                        placeholder='Enter your description'
                        required
                        value={playlistDescription}
                        onChange={(e) => {
                            setPlaylistDescription(e.target.value);
                        }}
                    />
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => onSave(playlistName, playlistDescription)}>
                        Save Changes
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default AddNewPlaylist;
