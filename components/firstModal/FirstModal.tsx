import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';
import "bootstrap/dist/css/bootstrap.min.css";
import AdBasics from './AdBasics';

interface Props {
  show: boolean;
  handleClose: () => any;
}

const FirstModal = (props: Props) => {
  const {
    show,
    handleClose
  } = props;

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Please enter the title of your ad and the date you would like it posted:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdBasics />
          </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FirstModal;