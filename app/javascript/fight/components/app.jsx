import React from 'react';

import Result from '../containers/result'
import PlayerCard from '../containers/card_player'
import ComputerCard from '../containers/card_computer'
import ActionList from '../containers/action_list'


const App = (props) => {
  return (
    <div className="app">
      <Result fightFromParams={props.match.params.fight}/>
      <PlayerCard />
      <ComputerCard />
      <ActionList />
    </div>
  );
};

export default App;
