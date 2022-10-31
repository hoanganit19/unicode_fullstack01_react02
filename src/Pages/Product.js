import React, { Component } from 'react'
import withRouter from '../Services/withRouter'
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div>
        <h1>Product</h1>
        
          <form>
            <div className='row'>
              <div className='col-3'>
                <select className='form-select'>
                  <option value={'all'}>Tất cả trạng thái</option>
                  <option value={'active'}>Kích hoạt</option>
                  <option value={'inactive'}>Chưa kích hoạt</option>
                </select>
              </div>
              <div className='col-7'>
                <input type={"search"} className={"form-control"} placeholder={"Từ khoá..."}/>
              </div>
              <div className='col-2'>
                <button type='submit' className='btn btn-primary'>Tìm kiếm</button>
              </div>
            </div>
          </form>
       
      </div>
    )
  }
}

export default withRouter(Product)