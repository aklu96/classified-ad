import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slider } from '@material-ui/core';

interface AdState {
  gender: string;
  age: string;
  consumer: boolean;
  smb: boolean;
  enterprise: boolean;
  rating: number;
}

interface Props {
  updateAd: (adState: AdState) => any;
}

interface State {
  [demographicDataType: string]: string | number | boolean;
}

class AdDemographics extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      gender: '',
      age: '',
      consumer: false,
      smb: false,
      enterprise: false,
      rating: 10
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleTargetInput = this.handleTargetInput.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }

  // handles radio and select elements
  handleInput(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // handle multiple-option checkbox
  handleTargetInput(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      [e.target.value]: !this.state[e.target.value]
    }, () => {
      console.log(this.state);
    });
  }

  // handles rating slider
  handleSlider(e: React.ChangeEvent<{}>, value: number | number[]) {
    if (!Array.isArray(value)) {
      this.setState({
        rating: value
      });
    }
  }

  render() {
    const { updateAd } = this.props;
    const {
      gender,
      age,
      consumer,
      smb,
      enterprise,
      rating,
    } = this.state;
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
          <div>Please rate our app!</div>
          <Slider
            defaultValue={10}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={10}
            valueLabelDisplay="auto"
            onChangeCommitted={this.handleSlider}
          />
          <div className="spacing"></div>
          <button
            type="button"
            onClick={() => {
              updateAd(this.state);
            }}
          >
            Complete
          </button>
        </form>
      </div>
    );
  }

};

export default AdDemographics;
