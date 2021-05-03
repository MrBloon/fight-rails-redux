import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { setSelectedClass, createHero } from '../actions/index';

class ClassList extends Component {
  onSubmit = (value) => {
    if (this.props.selectedClass) {
      this.props.createHero(value.name, this.props.selectedClass);
    }
  }


  handleClick = (classname) => {
    this.props.setSelectedClass(classname);
  }

  renderList = () => {
    return this.props.classList.map((classname, index) =>
      <div className={`card ${this.props.selectedClass === classname ? 'active' : ''}`} key={index} onClick={() => this.handleClick(classname)}>
        <div className="card_info">
          <div className={`card__image__${classname}`}></div>
          <div className="card__text">
            <span className="description">{classname}</span>
            <h2>Hero name</h2>
            <p>Deals heavy damage by sacrificing hit points</p>
            <div className="Character-skills">
              <span className="Character-skills-skill">
                Vision
                <span>Predicts ennemy next move</span>
              </span>
              <span className="Character-skills-skill">
                Boost
                <span>+1 Attack</span>
              </span>
              <span className="Character-skills-skill is-prof">
                Sacrifice
                <span>-2 hp +2 attack</span>
              </span>
              <span className="Character-skills-skill is-prof">
                Performance (CHA)
                <span>+3</span>
              </span>
            </div>
          </div>
          <div className="card__stats">
            <div className="stat stat__border__top">
              <div className="value">10</div>
              <div className="type">Hit Points</div>
            </div>
            <div className="stat stat__border stat__border__top">
              <div className="value">12</div>
              <div className="type">Attack</div>
            </div>
            <div className="stat stat__border__top">
              <div className="value">1</div>
              <div className="type">Level</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="First Name"
          />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Create HEro
          </button>
        </form>
        <h2>Choose a class : </h2>
        <div className="d-flex">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    classList: state.classList,
    selectedClass: state.selectedClass
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedClass, createHero }, dispatch);
}

export default reduxForm({
  form: 'newHeroForm' // a unique identifier
})(
  connect(mapStateToProps, mapDispatchToProps)(ClassList)
);
