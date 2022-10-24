import React, { Component } from 'react'
import withRouter from '../Services/withRouter'

export class Product extends Component {
  constructor(props){
    super(props);
  }


  render() {
   
    const [searchPrams, setSearchParams] = this.props.search;

    const {navigate} = this.props;

    // console.log(searchPrams.get('keyword'));
    // console.log(searchPrams.get('id'));

    const handleButtonClick = () => {
      setSearchParams({
        keyword: 'abc',
        id: 10
      })
    }

    const handleCheckout = () => {
      navigate('/thanh-toan');
    }

    return (
      <>
        <h1>Product</h1>
        <button type='button' onClick={handleButtonClick}>Click me</button>
        <button type='button' onClick={handleCheckout}>Thanh toán</button>
      </>
    )
  }
}

export default withRouter(Product)