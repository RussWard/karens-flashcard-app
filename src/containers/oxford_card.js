import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';

class OxfordCard extends React.Component {
  render() {
    if (!this.props.oxford.oxfordDef) {
      return <div></div>
    }
    return (
      <Card 
        provider={'Oxford'}
        definitions={this.props.oxford.oxfordDef}
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
