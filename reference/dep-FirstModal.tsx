// import React from 'react';
import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';
import "bootstrap/dist/css/bootstrap.min.css";


const FirstModal = (props) => {
  // let { huh } = props;
  // show = true;
  console.log('here', props);

  return (
    <div>{huh}</div>
  );
  // const { handleShow, handleClose } = this;
  /* return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ); */
};

export default FirstModal;