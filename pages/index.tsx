import React, { useState } from 'react';
import WelcomePage from '../components/WelcomePage';
// import "bootstrap/dist/css/bootstrap.min.css";

interface Props {

}

interface State {
  view: number
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    // This component will manage modal state in case user clicks out fo the workflow
    this.state = {
      view: 0
    };
  }

  renderView() {
    const { view } = this.state;
    switch (view) {
      case 0:
        return <WelcomePage />;
      case 1:
        return <FirstModal />;
      case 2:
        return <SecondModal />;
      case 3:
        return <ThirdModal />;
      case 4:
        return <Ad />;
    }
  }

  render() {
    return this.renderView();
  }
};

export default App;