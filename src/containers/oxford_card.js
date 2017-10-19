import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';

class OxfordCard extends React.Component {
  render() {
    if (!this.props.oxford.oxfordDef) {
      return <div></div>
    }
    
    let defArray = this.props.oxford.oxfordDef.results[0].lexicalEntries[0].entries[0].senses.map(sense => {
      return sense.definitions[0];
    });
    let word = this.props.oxford.oxfordDef.results[0].word;
    let type = this.props.oxford.oxfordDef.results[0].lexicalEntries[0].lexicalCategory

    return (
      <Card 
        provider={'Oxford'}
        word={word}
        type={type}
        definitions={defArray}
      />
    )
  }
}

function mapStateToProps({ oxford }) {
  return {
    oxford
  };
}

export default connect(mapStateToProps)(OxfordCard);
