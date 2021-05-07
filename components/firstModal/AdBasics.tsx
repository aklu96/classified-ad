// import Form from 'react-bootstrap/modal';
// import Button from 'react-bootstrap/button';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import validateCharLimit from '../../helperFunctions/validateCharLimit';

interface Props { }

interface State {
  adTitle: string;
}

class AdBasics extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      adTitle: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      adTitle: e.target.value
    });
  }

  render() {
    const { adTitle } = this.state;
    console.log(adTitle);
    return (
      <div>
        <form>
          <input name="adTitle" value={adTitle} onChange={this.handleInputChange} />
          <button
            type="button"
            onClick={() => {
              if (!validateCharLimit(adTitle, 50)) {
                // render validation text
                console.log('validation works');
                return;
              }
              // handle action to move to next form
            }}
          >
            Next
          </button>
        </form>
      </div>
    );
  }

};

export default AdBasics;
