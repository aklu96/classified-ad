import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface AdState {
  gender: string;
  age: string;
  target: {
    consumer: boolean;
    smb: boolean;
    enterprise: boolean;
  }
}

interface Props {
  updateAd: (adState: AdState) => any;
}

interface State {
  [demographicDataType: string]: string | {
    [targetName: string]: boolean
  }
}

class AdDemographics extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      gender: '',
      age: '',
      target: {
        consumer: false,
        smb: false,
        enterprise: false
      }
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleTargetInput = this.handleTargetInput.bind(this);
  }

  // handles radio and select elements
  handleInput(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleTargetInput(e: React.ChangeEvent<HTMLInputElement>) {
    const  { target } = this.state;
    target[e.target.value] = !target[e.target.value];
    this.setState({
      target
    });
  }

  render() {
    const { updateAd } = this.props;
    return (
      <div>
        <form>
          <div>Gender:</div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleInput}
          /> Male
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleInput}
          /> Female
          <br />
          <div className="spacing"></div>
          <div>Age:</div>
          <select name="age" onChange={this.handleInput}>
            <option value="0-20">0 - 20</option>
            <option value="20-40">20 - 40</option>
            <option value="40-60">40 - 60</option>
            <option value="60+">60+</option>
          </select>
          <br />
          <div className="spacing"></div>
          <div>Ad Target Audience (check all that apply):</div>
          <input
            type="checkbox"
            name="target"
            value="consumer"
            onChange={this.handleTargetInput}
          /> Consumers
          <br />
          <input
            type="checkbox"
            name="target"
            value="smb"
            onChange={this.handleTargetInput}
          /> SMBs
          <br />
          <input
            type="checkbox"
            name="target"
            value="enterprise"
            onChange={this.handleTargetInput}
          /> Large Enterprises
          <br />
          <div className="spacing"></div>
          <button
            type="button"
            onClick={() => {
              updateAd(this.state);
            }}
          >
            Next
          </button>
        </form>
      </div>
    );
  }

};

export default AdDemographics;
