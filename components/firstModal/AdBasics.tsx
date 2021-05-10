import React from "react";
import AdDate from './AdDate';
import validateCharLimit from '../../helperFunctions/validateCharLimit';
import validateDate from '../../helperFunctions/validateDate';

interface AdState {
  title: string;
  date: Date;
}

interface Props {
  updateAd: (adState: AdState) => any;
}

interface State {
  title: string;
  date: Date;
  showTextError: boolean;
  showDateError: boolean;
}

class AdBasics extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      title: '',
      date: new Date(),
      showTextError: false,
      showDateError: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      title: e.target.value
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
        <div className="validationMessage textContainer">Please enter a valid input</div>
      )
    }
    return null;
  }

  renderDateError() {
    const { showDateError } = this.state;
    if (showDateError) {
      return (
        <div className="validationMessage textContainer">Please enter a valid date</div>
      )
    }
    return null;
  }

  render() {
    const { title, date } = this.state;
    const { updateAd } = this.props;
    return (
      <div>
        <form>
          <input name="body" className="title" placeholder="Ad Title" value={title} onChange={this.handleInputChange} />
          <div className="textContainer">Max of 50 chars</div>
          {this.renderCharError()}
          <AdDate updateDate={this.updateDate} />
          <div className="textContainer">Tomorrow is our earliest availability</div>
          {this.renderDateError()}
          <button
            type="button"
            onClick={() => {
              // validate each and render respective error messages if wrong
              if (!validateCharLimit(title, 50)) {
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
              if (validateCharLimit(title, 50) && validateDate(date)) {
                updateAd({
                  title,
                  date
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

export default AdBasics;
