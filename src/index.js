import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import CreateFlashcard from './containers/create_flashcard';
import App from './components/App.jsx';
import PracticeVocab from './containers/practice_vocab';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/practice" component={PracticeVocab}/>
          <Route path="/create_flashcard/:word/:type/:def" component={CreateFlashcard}/>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('app'));
