import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setEquipmentList } from '../../actions/index.js';

class EquipmentList extends Component {
  renderList = () => {
    return this.props.equipmentList.map((equipment) =>
      <li key={equipment.id}
          onClick={() => this.handleEquipmentClick(equipment)}
      >
        {equipment.name}
      </li>
    )
  }

  handleEquipmentClick = (equipment) => {
    this.props.setEquipmentList(equipment);
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
    equipmentList: state.equipmentList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setEquipmentList: setEquipmentList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentList);
