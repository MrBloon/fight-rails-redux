import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerCard extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.playerHero.name}</h1>
        <ul>
          <li>player action : {this.props.playerAction}</li>
          <li>player hp : {this.props.playerHero.hit_points}</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playerAction: state.playerAction,
    playerHero: state.playerHero
  };
}
export default connect(mapStateToProps, null)(PlayerCard);
