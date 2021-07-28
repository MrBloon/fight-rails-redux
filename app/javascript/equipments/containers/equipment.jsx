import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseEquipmentQuantity, decreaseGoldAmount } from '../actions/index.js';


class Equipment extends Component {
  handleClick = () => {
    if (this.props.selectedEquipment.price <= this.props.gold) {
      this.props.selectedEquipment.quantity+=1
      this.props.increaseEquipmentQuantity(this.props.selectedEquipment);
      this.props.decreaseGoldAmount(this.props.gold - this.props.selectedEquipment.price);
    } else {
      console.log("not enoug money you poor !!")
    }
  }

  render () {
    return (
      <div>
        <span>current gold : {this.props.gold}</span>
        <ul>
          <li>
            {this.props.selectedEquipment.name}
          </li>
          <li>
            {this.props.selectedEquipment.description}
          </li>
          <li>
            {this.props.selectedEquipment.price}
          </li>
          <li>
            {this.props.selectedEquipment.equipment_type}
          </li>
        </ul>
        <a onClick={this.handleClick} className="btn btn-outline-primary" role="button">Buy Equipment</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedEquipment: state.selectedEquipment,
    gold: state.gold
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { increaseEquipmentQuantity: increaseEquipmentQuantity,
      decreaseGoldAmount: decreaseGoldAmount
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);
