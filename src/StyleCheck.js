import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function StyleCheck() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Открыть модальное окно
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Модальное окно</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Содержимое модального окна...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Сохранить изменения
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StyleCheck;
