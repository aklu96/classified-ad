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
      image: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log(this);
    this.setState({
      adBody: e.target.value
    });
  }

  handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const [file] = e.target.files;
    const reader = new FileReader();
    console.log(reader);
    console.log(this);
    reader.onload = (e) => {
      console.log(this);
      this.setState({
        image: e.target.result
      });
    }
    reader.readAsDataURL(file);
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
    const { adBody } = this.state;
    return (
      <div>
        <form>
          <textarea
            name="body"
            className="body"
            placeholder="Ad Body"
            value={adBody}
            onChange={this.handleInputChange}
          />
          <div className="textContainer">Max of 1000 chars</div>
          {this.renderCharError()}
          <div className="textContainer">Tomorrow is our earliest availability</div>
          <input
            type="file"
            accept="image/*"
            multiple={false}
            onChange={this.handleImageUpload}
          />
          <img id="target" src={this.state.image} />
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
