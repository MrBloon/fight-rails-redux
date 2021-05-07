import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Equipment from './equipment'
import { setSelectedEquipment } from '../actions/index.js';


class EquipmentList extends Component {
  handleClick = (equipment) => {
    this.props.setSelectedEquipment(equipment);
  }

  renderList = () => {
    return this.props.equipments.map((equipment) =>
      <li className="list-group-item " key={equipment.name}>
        <div className="d-flex justify-content-between align-items-center" onClick={() => this.handleClick(equipment)}>
          <span>{equipment.name}</span>
          <span>{equipment.price}</span>
          <span>{equipment.quantity}</span>
        </div>
      </li>
    )
  }

  render () {
    return (
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    equipments: state.equipments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setSelectedEquipment: setSelectedEquipment
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentList);
