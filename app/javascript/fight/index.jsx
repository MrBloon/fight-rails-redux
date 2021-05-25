// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// internal modules
import Hall from './containers/hall/hall';
import Levels from './containers//levels/levels';
import Fight from './components/fight';


// State and reducers
import playerHeroReducer from './reducers/player_hero_reducer';
import selectedEquipmentsReducer from './reducers/selected_equipments_reducer';
import computerHeroReducer from './reducers/computer_hero_reducer';
import specialsReducer from './reducers/specials_reducer';
import selectedSpecialReducer from './reducers/selected_special_reducer';
import playerActionReducer from './reducers/player_action_reducer';
import computerActionReducer from './reducers/computer_action_reducer';
import roundResultReducer from './reducers/round_result_reducer';
import finalResultReducer from './reducers/final_result_reducer';

const identityReducer = (state = null) => state;


const fight = document.getElementById('fight');
const playerHeros = JSON.parse(fight.dataset.heros);
const equipments = JSON.parse(fight.dataset.equipments);
const computerHeros = JSON.parse(fight.dataset.foes);

Modal.setAppElement(fight);


const initialState = {
  playerHero: null,
  playerHeroList: playerHeros,
  selectedEquipments: [],
  equipmentList: equipments,
  computerHero: null,
  computerHeroList: computerHeros,
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
  computerAction: null,
  roundResult: null,
  finalResult: null
}
const reducers = combineReducers({
  playerHero: playerHeroReducer,
  playerHeroList: identityReducer,
  selectedEquipments: selectedEquipmentsReducer,
  equipmentList: identityReducer,
  computerHero: computerHeroReducer,
  computerHeroList: identityReducer,
  actions: identityReducer,
  specials: specialsReducer,
  selectedSpecial: selectedSpecialReducer,
  playerAction: playerActionReducer,
  computerAction: computerActionReducer,
  roundResult: roundResultReducer,
  finalResult: finalResultReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={createBrowserHistory.history}>
      <Switch>
        <Route path="/fights/hall" component={Hall} />
        <Route path="/fights/levels" component={Levels} />
        <Route path="/fights/:fight" component={Fight} />
      </Switch>
    </Router>
  </Provider>,
  fight
);
