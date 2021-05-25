import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PlayerHeroList from './player_hero_list'
import EquipmentList from './equipment_list'

class Hall extends Component {
  setActiveClass = () => {
    if (!this.props.playerHero) {
      return ' disabled'
    } else {
      return ''
    }
  }

  render () {
    let nextBtnClass = `btn btn-outline-primary${this.setActiveClass()}`;
    return (
      <div>
        <h1>hall</h1>
        <PlayerHeroList/>
        <EquipmentList/>
        <Link to="/fights/levels" className={nextBtnClass}>Next</Link>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    playerHero: state.playerHero,
    equipmentList: state.equipmentList
  };
}

export default connect(mapStateToProps, null)(Hall);
