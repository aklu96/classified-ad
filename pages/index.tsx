import React, { useState } from 'react';
import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';
import Modal1 from '../components/Modal1';

class App extends React.Component<{}, { showModal: boolean }> {

  constructor() {
    super();

    // This component will manage modal state in case user clicks out fo the workflow
    this.state = {
      showModal: false
    };
  }

  showModal() {
    const  { showModal } = this.state;
    if (showModal) {
      return (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={() => {
          this.setState({
            showModal: !this.state.showModal
          })
        }} >View Modal</button>
        {this.showModal()}
        <Modal1 />
      </div>
    );
  }
};

const Hook = () => {

  const [test, setTest] = useState(10);

  return (
    <div>
      <p>This test has worked {test} times</p>
      <button onClick={() => setTest(test + 1)}>Test Me</button>
    </div>
  );

}

export default Modal1;