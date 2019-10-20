import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from './../../actions/index';


class ProductActionPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            id : '', 
            txtName : '', 
            txtPrice : '',
            chkbStatus : ''
        }
    }

    componentDidMount() {
       // console.log("componentDidMount");
        var {match} = this.props;
        if (match) {
            var id = match.params.id;
            // apiCaller(`products/${id}`, 'GET', null).then(res => {
            //     var data = res.data;
            //     this.setState({
            //         id : data.id, 
            //         txtName : data.name, 
            //         txtPrice : data.price, 
            //         chkbStatus : data.status
            //     });
            // });
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.editprodut) {
            var {editprodut} = this.props;
           this.setState({
               id : editprodut.id, 
               txtName : editprodut.name, 
               txtPrice : editprodut.price, 
               chkbStatus : editprodut.status
           });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var {history} = this.props;
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var product = {
            id : id, 
            name : txtName, 
            price : txtPrice, 
            status : chkbStatus
        };
        if (id) {
            // apiCaller(`products/${id}`, 'PUT', {
            //     name : this.state.txtName, 
            //     price : this.state.txtPrice,
            //     status : this.state.chkbStatus
            // }).then(res => {
            //     history.push("/product-list");
            // });
            this.props.onUpdateProduct(product);
            history.push("/product-list");
        }
        else{
            // apiCaller('products', 'POST', {
            //     name : this.state.txtName, 
            //     price : this.state.txtPrice,
            //     status : this.state.chkbStatus
            // }).then(res => {
            //     history.push("/product-list");
            // });
            this.props.onAddProduct(product);
            history.goBack();
        }
        
    }

    render() {
        //console.log("render");

        var { txtName , txtPrice, chkbStatus }= this.state;
        //console.log(this.state);
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSave}>
                    <div className="form-group">
                        <label>Tên Sản phẩm</label>
                        <input type="text" 
                            className="form-control" 
                            name="txtName"
                            value={txtName}
                            onChange= {this.onChange}
                            />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="number" 
                            className="form-control" 
                            name="txtPrice"
                            value={txtPrice}
                            onChange= {this.onChange}
                            />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" 
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange= {this.onChange}
                                checked= {chkbStatus}
                                />
                            Còn Hàng
                        </label>
                        <label>
                            <input type="checkbox"/>
                            Hết Hàng
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger mr-10">Trở lại</Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        editprodut : state.editprodut, 
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct : (product) => {
            dispatch(actAddProductRequest(product));
        }, 
        onEditProduct : (id) => {
            dispatch(actEditProductRequest(id));
        }, 
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);