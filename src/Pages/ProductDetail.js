import React, { Component } from 'react'
import withRouter from '../Services/withRouter'

export class ProductDetail extends Component {
  constructor(props){
    super(props);
  }  
  render() {
    const {params} = this.props;
    const {id} = params;
    return (
      <div>ProductDetail: {id}</div>
    )
  }
}

export default withRouter(ProductDetail)