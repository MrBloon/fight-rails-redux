// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import Modal from 'react-modal';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// internal modules
import App from './components/app';


// State and reducers
import specialsReducer from './reducers/specials_reducer';
import selectedSpecialReducer from './reducers/selected_special_reducer';
import playerActionReducer from './reducers/player_action_reducer';
import playerHeroReducer from './reducers/player_hero_reducer';
import computerHeroReducer from './reducers/computer_hero_reducer';
import computerActionReducer from './reducers/computer_action_reducer';
import roundResultReducer from './reducers/round_result_reducer';
import finalResultReducer from './reducers/final_result_reducer';

const identityReducer = (state = null) => state;


const fight = document.getElementById('fight');
const hero = JSON.parse(fight.dataset.hero);
const computer = JSON.parse(fight.dataset.foe);

Modal.setAppElement(fight);


const initialState = {
  actions: ["Melee Attack", "Ranged Attack", "Magic Attack"],
  specials: [
    {
      "name": "Vision",
      "uses": 2
    },
    {
      "name": "Melee Boost",
      "uses": 2,
      "boost": 1
    },
    {
      "name": "Ranged Boost",
      "uses": 2,
      "boost": 1
    },
    {
      "name": "Magic Boost",
      "uses": 2,
      "boost": 1
    }
  ],
  selectedSpecial: null,
  playerAction: null,
  playerHero: {
    "name": hero.name,
    "hit_points": hero.hit_points,
    "level": hero.level,
    "experience": hero.experience
  },
  computerHero: {
    "name": computer.name,
    "hit_points": computer.hit_points,
    "level": computer.level
  },
  computerAction: null,
  roundResult: null,
  finalResult: null
}
const reducers = combineReducers({
  actions: identityReducer,
  specials: specialsReducer,
  selectedSpecial: selectedSpecialReducer,
  playerAction: playerActionReducer,
  playerHero: playerHeroReducer,
  computerHero: computerHeroReducer,
  computerAction: computerActionReducer,
  roundResult: roundResultReducer,
  finalResult: finalResultReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <BrowserRouter>
      <Switch>
        <Route path="/fights/:fight" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  fight
);
