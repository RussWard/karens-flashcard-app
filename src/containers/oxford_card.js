import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import ErrorBoundary from '../components/ErrorBoundary';
import { loadFlashcard } from '../actions';

class OxfordCard extends React.Component {

  newFlashcard(def) {
    let card = {
      word: def.word,
      type: this.props.oxford.type,
      definition: def.definition
    }
    this.props.loadFlashcard(card)
  }

  render() {
    if (!this.props.oxford.defs) {
      return <div></div>
    }
    
    return (
      <ErrorBoundary>
        <div className="col-sm-6">
          <h2 className="text-xs-center">{'Oxford'}</h2>
          <h5 className="text-xs-center">Word: {this.props.oxford.word}</h5>
          <h5 className="text-xs-center">Part of Speech: {this.props.oxford.type}</h5>
          <ol>
            {this.props.oxford.defs.map(def => {
              if (def && def.definition.trim() !== '') {
                return <li 
                        key={def.id}
                        onClick={() => {
                          this.newFlashcard.apply(this, [def])
                        }}>
                          <Card 
                            def={def}
                            type={this.props.oxford.type} 
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

function mapStateToProps({ oxford }) {
  return {
    oxford
  };
}

export default connect(mapStateToProps, { loadFlashcard })(OxfordCard);
