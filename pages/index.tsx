import React from 'react';
import Head from 'next/head';
import MainPage from '../components/mainPage/MainPage';
import FirstModal from '../components/firstModal/FirstModal';
import SecondModal from '../components/secondModal/SecondModal';
import ThirdModal from '../components/thirdModal/ThirdModal';
import updateModalStates from '../helperFunctions/updateModalStates';
import returnAdState from '../helperFunctions/returnAdState';

// used for updateAdAndView method so that it can be reused for all modals
interface AdState {
  title?: string;
  date?: Date | string;
  body?: string;
  image?: string | ArrayBuffer;
  gender?: string;
  age?: string;
  consumer?: boolean;
  smb?: boolean;
  enterprise?: boolean;
  rating?: number;
}

// App Props and State
interface Props { }

interface State {
  view: number;
  firstModalShow: boolean;
  secondModalShow: boolean;
  thirdModalShow: boolean;
  title: string;
  date: Date | string;
  body: string;
  image: string | ArrayBuffer;
  gender: string;
  age: string;
  consumer: boolean;
  smb: boolean;
  enterprise: boolean;
  rating: number;
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
      date: '',
      body: '',
      image: '',
      // demographic info - not displayed on ad:
      gender: '',
      age: '',
      consumer: false,
      smb: false,
      enterprise: false,
      rating: 10
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
    this.setState(newState, () => {
      console.log(this.state);
    });
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
        <Head>
          <script
            src="https://code.jquery.com/jquery-3.6.0.js"
            integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
            crossOrigin="anonymous">
          </script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
            integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
            crossOrigin="anonymous">
          </script>
        </Head>
        <MainPage
          makeAd={this.handleMakeAdButton}
          adState={returnAdState(this.state)}
        />
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
        <ThirdModal
          show={thirdModalShow}
          handleClose={this.handleClose}
          updateAd={this.updateAdAndView}
        />
      </div>
    )
  }
};

export default App;