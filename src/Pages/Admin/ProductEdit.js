import React, { Component } from 'react'
import withRouter from '../../Services/withRouter'

export class ProductEdit extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {id} = this.props.params;
    return (
      <h1>ProductEdit: {id}</h1>
    )
  }
}

export default withRouter(ProductEdit)