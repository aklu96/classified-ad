import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import validateCharLimit from '../../helperFunctions/validateCharLimit';

interface Props { }

interface State {
  adBody: string;
  showTextError: boolean;
}

class AdBody extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      adBody: '',
      showTextError: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      adBody: e.target.value
    });
  }

  renderCharError() {
    const { showTextError } = this.state;
    if (showTextError) {
      return (
        <div className="validationMessage textContainer">Please enter a valid input</div>
      )
    }
    return null;
  }

  render() {
    const { adBody} = this.state;
    return (
      <div>
        <form>
          <input name="adTitle" placeholder="Ad Title" value={adBody} onChange={this.handleInputChange} />
          <div className="textContainer">Max of 1000 chars</div>
          {this.renderCharError()}
          <div className="textContainer">Tomorrow is our earliest availability</div>
          <button
            type="button"
            onClick={() => {
              // validate each and render respective error messages if wrong
              if (!validateCharLimit(adBody, 1000)) {
                this.setState({
                  showTextError: true
                });
              } else {
                this.setState({
                  showTextError: false
                });
              }
            }}
          >
            Next
          </button>
        </form>

      </div>
    );
  }

};

export default AdBody;
