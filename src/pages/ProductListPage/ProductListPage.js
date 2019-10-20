import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
//import apiCaller from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { fetchActionAllProducts, actDeleteProductRequest } from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {    // .then tức là gọi lên server rồi server (reponst) phản hồi thành công
        //console.log('componentDisMount');
        // apiCaller('products', 'GET', null).then(res => {
        //     // this.setState({
        //     //     products : res.data
        //     // });
        //     this.props.fetchAllProducts(res.data)
        // });
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        // var {products } = this.state;
        // apiCaller(`products/${id}`, 'DELETE', null).then(res => {
        //     if (res.status === 200) {
        //         var index = this.findIndex(products,id);
        //         if (index !== -1) {
        //             products.splice(index, 1);
        //             this.setState({
        //                 products : products
        //             });
        //         }
        //     }
        // });
        this.props.onDeleteProduct(id);
       
    }

    render() {
        //console.log('render');
        var {products} = this.props;
        //console.log(products);
        
        //var { products } = this.props;
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to="/product/add" className="btn btn-info mb-10ss">Thêm Sản Phẩm</Link>
                    <ProductList>
                        { this.showProducts(products) }
                    </ProductList>
                </div>
            </div>
        );
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem key={index}
                        product= {product}
                        index = {index}
                        onDelete = { this.onDelete }
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {   // mapStateToProps là lấy tất cả các state từ store 
    return { 
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {  // mapDispatchToProps để lưu lên store
    return {
        fetchAllProducts : () => {
            dispatch(fetchActionAllProducts());
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);