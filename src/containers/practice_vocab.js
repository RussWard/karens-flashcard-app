import React from 'react';
import { connect } from 'react-redux';
import { getFlashcards } from '../actions';

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
        {console.log('FLASHCARDS ====>', this.props.flashcards)}
        practice vocab
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
