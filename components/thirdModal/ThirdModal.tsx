import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';
import "bootstrap/dist/css/bootstrap.min.css";
import AdLogistics from './AdLogistics';

interface AdState {
  // update
}

interface Props {
  show: boolean;
  handleClose: () => any;
  updateAd: (adState: AdState) => any;
}

const ThirdModal = (props: Props) => {
  const {
    show,
    handleClose,
    updateAd
  } = props;

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Help us serve our customers by filling out some demographic data (optional)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdLogistics updateAd={updateAd} />
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

export default ThirdModal;
