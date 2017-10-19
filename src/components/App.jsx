import React from 'react';
import SearchBar from '../containers/search_bar';
import DefinitionList from '../containers/definition_list'

class App extends React.Component {
  

  render() {
    return (
      <div>
        <SearchBar />
        <DefinitionList />
      </div>
    );
  }
}

export default App;