import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RouterConfig from './router.js';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <RouterConfig />
    </div>
  </Provider>
  , document.getElementById('root'));
