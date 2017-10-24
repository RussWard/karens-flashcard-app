import React from 'react';
import SearchBar from '../containers/search_bar';
import DefinitionList from '../containers/definition_list'
import { Link } from 'react-router-dom';


class App extends React.Component {
  

  render() {
    return (
      <div> 
        <div className="text-xs-right">
          <Link to='/practice'>Practice With Your Saved Flashcards</Link>
        </div>  
        <SearchBar />   
        <DefinitionList />
      </div>
    );
  }
}

export default App;