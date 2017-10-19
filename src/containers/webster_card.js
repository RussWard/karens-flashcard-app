import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';

class WebsterCard extends React.Component {
  render() {
    if (!this.props.webster.websterDef) {
      return <div></div>
    }
    
    let word = this.props.webster.websterDef[0].word;
    let type = this.props.webster.websterDef[0].functional_label;
    let defs = this.props.webster.websterDef[0].definition[0].senses || this.props.webster.websterDef[0].definition;
    let defArray = defs.map(def => { 
      if (!def.senses) {
        return def.meanings[0]
      } 
      return def.senses[0].meanings[0];
    })
    
    return (
      <Card
        provider={'Webster'}
        word={word}
        type={type}
        definitions={defArray}
      />
    )
  }
}

function mapStateToProps({ webster }) {
  return {
    webster
  }
};

export default connect(mapStateToProps)(WebsterCard);