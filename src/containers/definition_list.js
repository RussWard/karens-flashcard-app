import React from 'react';
import { connect } from 'react-redux';
import OxfordCard from './oxford_card';

class DefinitionList extends React.Component {
  
  
  render() {
    
    return (
      
      <div className="row">
        <OxfordCard/>
        
      </div>
    )
  }
}

function mapStateToProps({ oxford }) {
  return {
    oxford
  };
}

export default connect(mapStateToProps)(DefinitionList);