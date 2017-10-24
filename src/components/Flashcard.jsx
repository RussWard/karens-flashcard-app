import React from 'react';

class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.toggleFlip = this.toggleFlip.bind(this);
  }

  toggleFlip() {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    if (this.state.flipped) {
      return (
        <div className="flashcard back" onClick={this.toggleFlip}>
          <div>{this.props.type}</div>
          <div>{this.props.def}</div>
        </div>
      )
    }
    return (
      <div className="flashcard front" onClick={this.toggleFlip}>
        <div>{this.props.word}</div>
      </div>
    )
  }
}

export default Flashcard;