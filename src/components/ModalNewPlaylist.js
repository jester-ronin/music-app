import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalNewPlaylist({ onSave }) {
    const [show, setShow] = useState(false);
    const [playlistName, setPlaylistName] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Open Modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new playlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>Enter name of new playlist</Modal.Body>
                <Modal.Footer>
                    <input
                        type="text"
                        className={`form-control ${isInvalid ? 'is-invalid' : 'is-valid'}`}
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
                    <Button variant="primary" onClick={() => {
                        onSave(playlistName, playlistDescription);
                        setPlaylistName("");
                    }}>
                        Save Changes
                    </Button>


                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalNewPlaylist;
