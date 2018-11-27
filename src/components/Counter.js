import React, { Component } from 'react';
import { connect } from 'react-redux';
import bindActionCreator from "../redux/bindActionCreator";
import * as types from "../redux/types";

class Counter extends Component {
  render() {
    return (
      <div>
        <div>count: {this.props.count}</div>
        <button
          onClick={() => bindActionCreator(types.COUNT_UP)}
        >
          Count up
        </button>
      </div>
    );
  }
}

export default connect(state => state)(Counter);

