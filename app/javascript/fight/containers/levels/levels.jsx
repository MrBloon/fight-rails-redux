import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setComputerHero, createFight } from '../../actions/index.js';


class Levels extends Component {
  renderList = () => {
    return this.props.computerHeroList.map((hero) =>
      <li key={hero.id}
          onClick={() => this.handleHeroClick(hero)}
      >
        {hero.name}
      </li>
    )
  }

  handleHeroClick = (hero) => {
    this.props.setComputerHero(hero);
  }

  handleContinueClick = () => {
    this.props.createFight((fight) => {
      this.props.history.push(`/fights/${fight.id}`);
    });

  }

  setActiveClass = () => {
    if (!this.props.computerHero) {
      return ' disabled'
    } else {
      return ''
    }
  }

  render () {
    let continueBtnClass = `btn btn-outline-primary${this.setActiveClass()}`;
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
        <a className={continueBtnClass} role="button" onClick={this.handleContinueClick}>Continue</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    computerHeroList: state.computerHeroList,
    computerHero: state.computerHero
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setComputerHero: setComputerHero,
      createFight: createFight
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Levels);
