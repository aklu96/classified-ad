import React from "react";

class App extends React.Component {

  constructor() {
    super();

    // This component will manage modal state in case user clicks out fo the workflow
    this.state = {
      modal: 0
    };
  }

  render() {
    return (
      <h1>App</h1>
    );
  }
};

export default App;