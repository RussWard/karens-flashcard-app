import React from 'react';
import { connect } from 'react-redux';
import { deleteFlashcard, getFlashcards } from '../actions';

class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.toggleFlip = this.toggleFlip.bind(this);
    this.handleDeleteFlashcard = this.handleDeleteFlashcard.bind(this);
  }

  toggleFlip() {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  handleDeleteFlashcard() {
    this.props.deleteFlashcard(this.props.id, () => {
      this.props.getFlashcards();
    });
  }


  render() {
    if (this.state.flipped) {
      return (
        <div className="row">
          <div className="col-xs-6 flashcard back" onClick={this.toggleFlip}>
            <div>{this.props.type}</div>
            <div>{this.props.def}</div>
          </div>
          <div className="col-xs-6 button-box">
            <button>Got it!</button>
            <button>Nope.</button>
            <button onClick={this.handleDeleteFlashcard}>Delete Flashcard</button>
          </div>
        </div>
      )
    }
    return (
      <div className="row">
        <div className="col-xs-6 flashcard front" onClick={this.toggleFlip}>
          <div>{this.props.word}</div>
        </div>
    
      </div>
    )
  }
}

export default connect(null, { deleteFlashcard, getFlashcards })(Flashcard);