import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { resetState, updatePlayerHP, updateComputerHP, setFinalResult, updatePlayerExperience } from '../actions/index.js';


class Result extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.roundResult !== nextProps.roundResult || this.state.showModal);
  }

  componentDidUpdate() {
    if (this.props.roundResult && !this.state.showModal) {
      this.timeout = setTimeout(() => {
        this.computePlayerHP();
        this.computeComputerHP();
      }, 1000);
    }
  }

  handleModalClick = (event) => {
    const newExperience = this.props.playerHero.experience + 100;
    this.props.updatePlayerExperience(newExperience, this.props.fightFromParams);

  }

  handleNextRoundClick = (event) => {
    this.props.resetState();
    document.querySelectorAll('.btn').forEach((btn) => {
      btn.removeAttribute("disabled");
    });
  }

   computePlayerHP = () => {
    const roundResult = this.props.roundResult;
    let playerHP = this.props.playerHero.hit_points

    if (roundResult === "Both sides suffer damages") {
      playerHP--
    } else if (roundResult === "You deal damage to your foe but suffer from his range attack") {
      playerHP--
    } else if (roundResult === "The foe deals damage to you but suffer from your range attack") {
      playerHP = playerHP - 2
    } else if (roundResult === "The foe deals damage to you") {
      playerHP = playerHP - 2
    } else if (roundResult === "The foe deals heavy damage to you") {
      playerHP = playerHP - 3
    }

    this.props.updatePlayerHP(playerHP);
  }

  computeComputerHP = () => {
    const roundResult = this.props.roundResult;
    let computerHP = this.props.computerHero.hit_points;
    let boost = 0

    if (this.props.selectedSpecial && this.props.selectedSpecial.name.includes("Boost")) {
      boost = this.props.selectedSpecial.boost;
    }

    if (roundResult === "Both sides suffer damages") {
      computerHP = computerHP - (1 + boost)
    } else if (roundResult === "The foe deals damage to you but suffer from your range attack") {
      computerHP = computerHP - (1 + boost)
    } else if (roundResult === "You deal damage to your foe but suffer from his range attack") {
      computerHP = computerHP - (2 + boost)
    } else if (roundResult === "You deal damage to your foe") {
      computerHP = computerHP - (2 + boost)
    } else if (roundResult === "You deal heavy damage to your foe") {
      computerHP = computerHP - (3 + boost)
    }

    this.props.updateComputerHP(computerHP);
    this.computeFinalResult();
  }

  computeFinalResult = () => {
    if (this.props.computerHero.hit_points <= 5 && this.props.playerHero.hit_points <= 9) {
      this.setState({showModal: true});
      this.props.setFinalResult("Tie");
    } else if (this.props.computerHero.hit_points <= 5) {
      this.setState({showModal: true});
      this.props.setFinalResult("Victory")
    } else if (this.props.playerHero.hit_points <= 5) {
      this.setState({showModal: true});
      this.props.setFinalResult("Defeat")
    }
  }

  render () {
    const modalStyle = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      },
    };

    let modalButtonClass = "btn btn-outline-";
    let modalText = ""
    if (this.props.finalResult === "Victory") {
      modalButtonClass += "success"
      modalText = "well done"
    } else if (this.props.finalResult === "Defeat") {
      modalButtonClass += "danger"
      modalText = "looser !!"
    } else {
      modalButtonClass += "secondary"
      modalText = "it's a tie"
    }

    return (
        <div>
          <Modal isOpen={this.state.showModal} style={modalStyle}>
            <h2>{this.props.finalResult}</h2>
            <p>{modalText}</p>
            <a className={modalButtonClass} href="/" role="button" onClick={this.handleModalClick}>Continue</a>
          </Modal>
          <div>round result : {this.props.roundResult} </div>
          <a onClick={this.handleNextRoundClick} className="btn btn-outline-primary" role="button">Next Round</a>
          <a className="btn btn-outline-danger" href="/" role="button">Admit defeat</a>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    roundResult: state.roundResult,
    playerHero: state.playerHero,
    computerHero: state.computerHero,
    selectedSpecial: state.selectedSpecial,
    finalResult: state.finalResult
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { resetState: resetState,
      updatePlayerHP: updatePlayerHP,
      updateComputerHP: updateComputerHP,
      setFinalResult: setFinalResult,
      updatePlayerExperience: updatePlayerExperience
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
