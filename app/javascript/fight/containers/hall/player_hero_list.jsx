import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPlayerHero } from '../../actions/index.js';


class PlayerHeroList extends Component {
  renderList = () => {
    return this.props.playerHeroList.map((hero) =>
      <li key={hero.id}
          onClick={() => this.handleHeroClick(hero)}
      >
        {hero.name}
      </li>
    )
  }

  handleHeroClick = (hero) => {
    this.props.setPlayerHero(hero);
  }

  render () {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playerHeroList: state.playerHeroList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setPlayerHero: setPlayerHero
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerHeroList);
