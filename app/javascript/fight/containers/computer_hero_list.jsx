import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ComputerHeroList extends Component {
  renderList = () => {
    return this.props.heroList.map((hero) =>
      <li>
        {hero.name}
      </li>
    )
  }

  render () {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
        <a className="btn btn-outline-primary" href="/" role="button">Admit defeat</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroList: state.heroList
  };
}
export default connect(mapStateToProps, null)(ComputerHeroList);
