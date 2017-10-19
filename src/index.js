import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import promise from 'redux-promise';
//import reducers from './reducers';
import store from './store';
import App from './components/App.jsx';

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('app'));
