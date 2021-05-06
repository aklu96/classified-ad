import React from 'react';
import MainPage from '../components/mainPage/MainPage';
import FirstModal from '../components/firstModal/FirstModal';
import SecondModal from '../components/secondModal/SecondModal';
import ThirdModal from '../components/thirdModal/ThirdModal';

interface Props { }

interface State {
  view: number;
  firstModalShow: boolean;
  secondModalShow: boolean;
  thirdModalShow: boolean;
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
    this.handleClose = this.handleClose.bind(this);
  }

  // This button shows the current modal
  handleMakeAdButton() {
    let {
      view,
      firstModalShow,
      secondModalShow,
      thirdModalShow
    } = this.state;

    // If the workflow is just beginning, show the first modal.
    if (view === 0) {
      view = 1;
    }

    // update modal states
    firstModalShow = view === 1 ? true : false;
    secondModalShow = view === 2 ? true : false;
    thirdModalShow = view === 3 ? true : false;

    this.setState({
      view,
      firstModalShow,
      secondModalShow,
      thirdModalShow
    });
  }

  iterateView() {
    let { view } = this.state;
    view++;
    this.setState({
      view
    });
  }

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
        <FirstModal show={firstModalShow} handleClose={this.handleClose} />
      </div>
    )
  }
};

export default App;