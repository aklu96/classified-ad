import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';
import "bootstrap/dist/css/bootstrap.min.css";
import AdBody from './AdBody';

interface AdState {
  body: string;
  image: string | ArrayBuffer;
}

interface Props {
  show: boolean;
  handleClose: () => any;
  updateAd: (adState: AdState) => any;
}

const SecondModal = (props: Props) => {
  const {
    show,
    handleClose,
    updateAd
  } = props;

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Please enter the title of your ad and the date you would like it posted:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdBody updateAd={updateAd} />
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

export default SecondModal;