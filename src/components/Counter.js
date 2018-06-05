import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { increment } from '../actions'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

class CounterComponent extends Component {
  handleClick = () => {
    const { dispatch } = this.props
    dispatch(increment())
  }

  render() {
    const { counter } = this.props
    return (
      <div className="card align-middle">
        <div className="card-section">
          <div className="h1">{counter}</div>
        </div>
        <div className="card-section">
          <button className="button large success" onClick={this.handleClick}>Increment counter</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CounterComponent)
