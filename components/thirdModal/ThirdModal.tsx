import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';
// import '../../styles/bootstrap.min.css';
import AdDemographics from './AdDemographics';

interface AdState {
  gender: string;
  age: string;
  consumer: boolean;
  smb: boolean;
  enterprise: boolean;
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
          <Modal.Title>Help us better serve our customers by providing information about yourself (optional)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdDemographics updateAd={updateAd} />
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
