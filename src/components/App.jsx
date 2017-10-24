import React from 'react';
import SearchBar from '../containers/search_bar';
import DefinitionList from '../containers/definition_list'
import { Link } from 'react-router-dom';


class App extends React.Component {
  

  render() {
    return (
      <div>   
        <SearchBar />   
        <DefinitionList />
        <div className="text-xs-right">
          <Link to='/practice'>WERK!</Link>
        </div>
      </div>
    );
  }
}

export default App;