import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedEquipmentList, updateEquipmentList } from '../../actions/index.js';

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
    const length = this.props.selectedEquipments.length;
    let allowed = true;

    if (length >= 3) allowed = false;

    this.props.selectedEquipments.forEach((object) => {
      if (object.equipment_type == equipment.equipment_type) allowed = false;
    });

    if ((length === 0) || allowed) {
      this.props.setSelectedEquipmentList(equipment);
      this.props.updateEquipmentList(equipment);
    }
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
    equipmentList: state.equipmentList,
    selectedEquipments: state.selectedEquipments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setSelectedEquipmentList: setSelectedEquipmentList,
      updateEquipmentList: updateEquipmentList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentList);
