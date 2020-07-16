import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './redux/reducer';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Weather from './pages/Weather';

const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const app = (
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={App} exact />
        <Route path='/weather' component={Weather} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
