// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { reducer as formReducer } from 'redux-form';

// internal modules
import App from './components/app';

// State and reducers
import selectedClassReducer from './reducers/selected_class_reducer';


const identityReducer = (state = null) => state;
const hero = document.getElementById('hero');


const initialState = {
  classList: ["paladin", "demonist"],
  selectedClass: null
}
const reducers = combineReducers({
  classList: identityReducer,
  selectedClass: selectedClassReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  hero
);
