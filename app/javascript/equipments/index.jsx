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
import equipmentsReducer from './reducers/equipments_reducer';
import selectedEquipmentReducer from './reducers/selected_equipment_reducer';
import goldReducer from './reducers/gold_reducer';

const equipments = document.getElementById('equipments');
const gold = JSON.parse(equipments.dataset.gold);
const userEquipments = JSON.parse(equipments.dataset.equipments);

const initialState = {
  equipments: [
    {
      "name": "Sword",
      "quantity": 0,
      "price": 100,
      "description": "+1 melee attack"
    },
    {
      "name": "Shield",
      "quantity": 0,
      "price": 100,
      "description": "+1 hit points"
    },
    {
      "name": "Armour",
      "quantity": 0,
      "price": 200,
      "description": "+2 hit points"
    },
    {
      "name": "War Hammer",
      "quantity": 0,
      "price": 200,
      "description": "+2 melee attack. You can't use other one handed item"
    },
    {
      "name": "Helmet",
      "quantity": 0,
      "price": 50,
      "description": "+1 hit points"
    },
    {
      "name": "Bow",
      "quantity": 0,
      "price": 100,
      "description": "+1 ranged attack"
    },
    {
      "name": "Life Potion",
      "quantity": 0,
      "price": 200,
      "description": "Regenerate 2 hit points"
    },
    {
      "name": "Magic Staff",
      "quantity": 0,
      "price": 200,
      "description": "+2 magic attack. You can't use other one handed item"
    },
    {
      "name": "Robe",
      "quantity": 0,
      "price": 200,
      "description": "+1 hit points"
    }
  ],
  selectedEquipment: {
    "name": "Sword",
    "quantity": 0,
    "price": 100,
    "description": "+1 melee attack"
  },
  gold: gold
}

userEquipments.forEach((userEquipment) => {
  initialState.equipments.forEach((equipment) => {
    if(userEquipment.name === equipment.name) {
      equipment.quantity = userEquipment.quantity
    }
  })
})


const reducers = combineReducers({
  equipments: equipmentsReducer,
  selectedEquipment: selectedEquipmentReducer,
  gold: goldReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  equipments
);
