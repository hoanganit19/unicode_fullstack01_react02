import React, { Component } from "react";
import withRouter from "../Services/withRouter";
import "bootstrap/dist/css/bootstrap.min.css";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'all',
      keyword: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault(); //Ngăn reload khi submit
    const {status, keyword} = this.state;
    const [searchPrams, setSearchPrams] = this.props.search;

    const filters = {}

    if (status!=='all'){
      filters.status = status;
    }

    if (keyword!==''){
      filters.keyword = keyword;
    }

    setSearchPrams(filters);
  };

  handleChangeValue = (e) => {
    const data = {...this.state};
    data[e.target.name] = e.target.value;
    this.setState(data);
  };

  componentDidMount = () => {
    const [searchPrams, setSearchPrams] = this.props.search;
    this.setState({
      status: searchPrams.get('status')??'all',
      keyword: searchPrams.get('keyword')??''
    });
  }

  render() {
    const {status, keyword} = this.state;
    return (
      <div>
        <h1>Product</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-3">
              <select name="status" value={status} className="form-select" onChange={this.handleChangeValue}>
                <option value={"all"}>Tất cả trạng thái</option>
                <option value={"active"}>Kích hoạt</option>
                <option value={"inactive"}>Chưa kích hoạt</option>
              </select>
            </div>
            <div className="col-7">
              <input
                type={"search"}
                className={"form-control"}
                placeholder={"Từ khoá..."}
                name="keyword"
                onChange={this.handleChangeValue}
                value={keyword}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Tìm kiếm
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Product);
