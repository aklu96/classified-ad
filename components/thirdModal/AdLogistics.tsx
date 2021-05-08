import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface AdState {
  gender: string;
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
  gender: string;
  target: {
    [targetName: string]: boolean
  }
}

class AdLogistics extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      gender: '',
      target: {
        consumer: false,
        smb: false,
        enterprise: false
      }
    }

    this.handleGenderInput = this.handleGenderInput.bind(this);
    this.handleTargetInput = this.handleTargetInput.bind(this);
  }

  handleGenderInput(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      gender: e.target.value
    });
  }

  handleTargetInput(e: React.ChangeEvent<HTMLInputElement>) {
    const state = this.state;
    state.target[e.target.value] = !state.target[e.target.value];
    this.setState(state);
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
            onChange={this.handleGenderInput}
          /> Male
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleGenderInput}
          /> Female
          <br />
          <div className="spacing"></div>
          <div>Target Audience (check all that apply):</div>
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
          <div>Age:</div>
          <select name="age">
            <option value="0-20"> 0 - 20</option>
          </select>
          <br />
          <div className="spacing"></div>
          <button
            type="button"
            onClick={() => {
              updateAd({
                // update
              });
            }}
          >
            Next
          </button>
        </form>
      </div>
    );
  }

};

export default AdLogistics;
