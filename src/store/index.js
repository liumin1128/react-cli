import { createStore, compose, applyMiddleware } from 'redux';
import effect from './redux-effect';

import reducer from './reducer';
import effects from './effects';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      effect(effects),
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : applyMiddleware(),
  ),
);

store.dispatch({ type: 'test' });

export default store;
