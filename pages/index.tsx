import React from 'react';
import MainPage from '../components/mainPage/MainPage';
import FirstModal from '../components/firstModal/FirstModal';
import SecondModal from '../components/secondModal/SecondModal';
import ThirdModal from '../components/thirdModal/ThirdModal';
import updateModalStates from '../helperFunctions/updateModalStates'

// used for updateAdAndView method so that it can be reused for all modals
interface AdState {
  title?: string;
  date?: Date;
  body?: string;
}

interface Props { }

interface State {
  view: number;
  firstModalShow: boolean;
  secondModalShow: boolean;
  thirdModalShow: boolean;
  title: string;
  date: Date;
  body: string;
}

// This component will manage top-level state for the application
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      // view render state:
      view: 0,
      firstModalShow: false,
      secondModalShow: false,
      thirdModalShow: false,
      // ad state:
      title: '',
      date: new Date(),
      body: ''
    };

    this.handleMakeAdButton = this.handleMakeAdButton.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateAdAndView = this.updateAdAndView.bind(this);
  }

  // This button shows the current modal
  handleMakeAdButton() {
    let { view } = this.state;
    // If the workflow is just beginning, show the first modal.
    if (view === 0) {
      view = 1;
    }
    const newState = { view };
    // update modal states
    Object.assign(newState, updateModalStates(view));
    this.setState(newState);
  }

  // this function updates the ad state after each modal and renders the next one
  updateAdAndView(adState: AdState) {
    let { view } = this.state;
    // update view and modal states
    view++;
    const newState = { view };
    // update modal states
    Object.assign(newState, updateModalStates(view));

    // use assign in order to bypass making a method for each modal
    Object.assign(newState, adState);
    this.setState(newState);
  }

  // handle exiting modals (passed down to each modal)
  handleClose() {
    this.setState({
      firstModalShow: false,
      secondModalShow: false,
      thirdModalShow: false
    });
  }

  render() {
    const {
      firstModalShow,
      secondModalShow,
      thirdModalShow
    } = this.state;
    return (
      <div>
        <MainPage makeAd={this.handleMakeAdButton} />
        <FirstModal
          show={firstModalShow}
          handleClose={this.handleClose}
          updateAd={this.updateAdAndView}
        />
        <SecondModal
          show={secondModalShow}
          handleClose={this.handleClose}
          updateAd={this.updateAdAndView}
        />
      </div>
    )
  }
};

export default App;