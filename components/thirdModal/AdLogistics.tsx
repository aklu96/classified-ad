import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface AdState {
  // update
}

interface Props {
  updateAd: (adState: AdState) => any;
}

interface State {
  // update
}

class AdLogistics extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      gender: '',
      showTextError: false,
      image: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      gender: e.target.value
    }, () => {
      console.log(this.state.gender);
    });
  }

  render() {
    const {
      body,
      image
    } = this.state;
    const { updateAd } = this.props;
    return (
      <div>
        <form>
          <div>Gender:</div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleInputChange}
          /> Male
          <div></div>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleInputChange}
          /> Female
          <div>Gender:</div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleInputChange}
          /> Male
          <div></div>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleInputChange}
          /> Female
          <div className="spacing"></div>
          <button
            type="button"
            onClick={() => {
              // validate text body; no image is accepted
              if (!validateCharLimit(body, 1000)) {
                this.setState({
                  showTextError: true
                });
              } else {
                updateAd({
                  body,
                  image
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

export default AdLogistics;
