import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ComputerCard extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.computerHero.name}</h1>
        <ul>
          <li>computer action : {this.props.computerAction}</li>
          <li>computer hp : {this.props.computerHero.hit_points}</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    computerAction: state.computerAction,
    computerHero: state.computerHero
  };
}
export default connect(mapStateToProps, null)(ComputerCard);
