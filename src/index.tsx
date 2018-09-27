import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { applyMiddleware, compose,createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk'
import reducer from './redux/index.redux';

const store = createStore(reducer,compose(
  applyMiddleware(thunk),
  composeWithDevTools()
  ));

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

