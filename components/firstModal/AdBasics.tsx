// import Form from 'react-bootstrap/modal';
// import Button from 'react-bootstrap/button';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdDate from './AdDate';
import validateCharLimit from '../../helperFunctions/validateCharLimit';
import validateDate from '../../helperFunctions/validateDate';

interface Props { }

interface State {
  adTitle: string;
  date: Date;
  showTextError: boolean;
  showDateError: boolean;
}

class AdBasics extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      adTitle: '',
      date: new Date(),
      showTextError: false,
      showDateError: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      adTitle: e.target.value
    });
  }

  updateDate(date: Date) {
    this.setState({
      date
    });
  }

  renderCharError() {
    const { showTextError } = this.state;
    if (showTextError) {
      return (
        <div className="validationMessage">Please enter a valid input</div>
      )
    }
    return null;
  }

  renderDateError() {
    const { showDateError } = this.state;
    if (showDateError) {
      return (
        <div className="validationMessage">Please enter a valid date</div>
      )
    }
    return null;
  }

  render() {
    const { adTitle, date } = this.state;
    return (
      <div>
        <form>
          <input name="adTitle" placeholder="Ad Title" value={adTitle} onChange={this.handleInputChange} />
          <div>Max of 50 chars</div>
          {this.renderCharError()}
          <AdDate updateDate={this.updateDate} />
          <div>Tomorrow is our earliest availability</div>
          {this.renderDateError()}
          <button
            type="button"
            onClick={() => {
              // validate each and render respective error messages if wrong
              if (!validateCharLimit(adTitle, 50)) {
                this.setState({
                  showTextError: true
                });
              } else {
                this.setState({
                  showTextError: false
                });
              }
              if (!validateDate(date)) {
                this.setState({
                  showDateError: true
                });
              } else {
                this.setState({
                  showDateError: false
                });
              }

              // if both fields are satisfied, save state to App and go to the next modal
              if (validateCharLimit(adTitle, 50) && validateDate(date)) {
                // go to next modal
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

export default AdBasics;
