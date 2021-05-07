import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import validateCharLimit from '../../helperFunctions/validateCharLimit';

interface AdState {
  body: string;
  image: string | ArrayBuffer;
}

interface Props {
  updateAd: (adState: AdState) => any;
}

interface State {
  body: string;
  showTextError: boolean;
  image: string | ArrayBuffer;
}

class AdBody extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      body: '',
      showTextError: false,
      image: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      body: e.target.value
    });
  }

  handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    const file = files ? files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          this.setState({
            image: e.target.result
          });
        }
      }
      reader.readAsDataURL(file);
    }
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
    const {
      body,
      image
    } = this.state;
    const { updateAd } = this.props;
    return (
      <div>
        <form>
          <textarea
            name="body"
            className="body"
            placeholder="Ad Body"
            value={body}
            onChange={this.handleInputChange}
          />
          <div className="textContainer">Max of 1000 chars</div>
          {this.renderCharError()}
          <div className="textContainer">If you would like to enter an image, do so below:</div>
          <input
            type="file"
            accept="image/*"
            multiple={false}
            onChange={this.handleImageUpload}
          />
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

export default AdBody;
