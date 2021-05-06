import React from 'react';
import MainPage from '../components/mainPage/MainPage';
import FirstModal from '../components/firstModal/FirstModal';
import SecondModal from '../components/secondModal/SecondModal';
import ThirdModal from '../components/thirdModal/ThirdModal';

interface Props { }

interface State {
  view: number,
  firstModalShow: boolean,
  secondModalShow: boolean,
  thirdModalShow: boolean
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    // This component will manage modal state in case user clicks out of the workflow
    this.state = {
      view: 0,
      firstModalShow: false,
      secondModalShow: false,
      thirdModalShow: false,
    };

    this.handleMakeAdButton = this.handleMakeAdButton.bind(this);
  }

  // This button should show the current modal.
  // If the workflow is just beginning, show the first modal.
  handleMakeAdButton() {
    let { view } = this.state;

    if (view === 0) {
      view = 1;
    }
    console.log('makead', view);
    this.setState({
      view
    });
  }

  iterateView() {
    let { view } = this.state;
    view++;
    this.setState({
      view
    });
  }

  renderModals(modal) {
    const { view } = this.state;
    if (view === modal) {
      console.log('render');
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <MainPage makeAd={this.handleMakeAdButton} />
        <FirstModal show={this.renderModals(1)} />
      </div>
    )
  }
};

export default App;