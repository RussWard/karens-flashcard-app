import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import ErrorBoundary from '../components/ErrorBoundary';
import { loadFlashcard } from '../actions';

class WebsterCard extends React.Component {

  newFlashcard(def) {
    let card = {
      word: def.word,
      type: this.props.webster.type,
      definition: def.definition
    }
    this.props.loadFlashcard(card)
  }
  
  render() {
    if (!this.props.webster.defs) {
      return <div></div>
    }
    
    return (
      <ErrorBoundary>
        <div className="col-sm-6">
          <h2 className="text-xs-center">{'Webster'}</h2>
          <h5 className="text-xs-center">Word: {this.props.webster.word}</h5>
          <ol>
            {this.props.webster.defs.map(def => {
              if (def && def.definition.trim() !== '') {
                return <li 
                        key={def.id}
                        onClick={() => {
                          this.newFlashcard.apply(this, [def])
                        }}>
                          <Card 
                            def={def}
                            word={this.props.webster.word}
                            type={this.props.webster.type} 
                            />
                       </li>
              }
            })}
          </ol>  
        </div>
      </ErrorBoundary>
    )
  }
}

function mapStateToProps({ webster }) {
  return {
    webster
  }
};

export default connect(mapStateToProps, { loadFlashcard })(WebsterCard);