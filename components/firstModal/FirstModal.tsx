import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';
import "bootstrap/dist/css/bootstrap.min.css";

const FirstModal = (props) => {
  console.log(props);
  let handleShow, handleClose;
  return (
    <div>
      <div>{props.wtf}</div>
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={props.show} onHide={handleClose}>
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
    </div>
  );
};

export default FirstModal;