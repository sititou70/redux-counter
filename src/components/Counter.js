import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <div>count: {this.props.count}</div>
        <button>
          Count up
        </button>
      </div>
    );
  }
}

export default connect(state => state)(Counter);

