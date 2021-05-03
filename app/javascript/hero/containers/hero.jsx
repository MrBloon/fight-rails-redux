import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Hero extends Component {

  render () {
    return (
      <div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedClass: state.selectedClass
  };
}
export default connect(mapStateToProps, null)(Hero);
