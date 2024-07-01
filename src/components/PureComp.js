import PropTypes from 'prop-types'
import React, { Component } from 'react'

class PureComp extends Component {

  render() {
    console.log('PureComponent')
    return (
      <div>PureComp {this.props.name}</div>
    )
  }
}


export default PureComp
