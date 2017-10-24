import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFlashcards } from '../actions';
import Flashcard from '../components/Flashcard';

class PracticeVocab extends React.Component {
  componentDidMount() {
    this.props.getFlashcards()
  }

  render() {
    if (!this.props.flashcards) {
      return <div>
               <Link to="/">Back to Index</Link>
               <div>
                Search some words to create flashcards
               </div>
            </div>
    }
    return (
      <div>
        <Link to="/">Back to Index</Link>
        <div className="row">
          <div className="col-xs-12">
            {this.props.flashcards.map(word => {
              return <div key={word._id + 'flashcardKey'}>
                      <Flashcard
                        word={word.word}
                        def={word.def}
                        type={word.type}
                      />
                      </div>})}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ flashcards }) {
  return {
    flashcards
  }
}

export default connect(mapStateToProps, { getFlashcards })(PracticeVocab);
