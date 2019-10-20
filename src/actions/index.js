import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const fetchActionAllProducts = () => {
    return (dispatch) => {
        return  callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCT, 
        products
    }
}
// dispatch action để thực thi cái action để xử lý array ở trên store
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res=> {
            dispatch(actDeleteProduct(id))
        });
    }
}

export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT, 
        id
    }
}

export const actAddProductRequest = (product) => {// product có các trường là name , price , status
    return (dispatch) => {
        return callApi('products' , 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type : Types.ADD_PRODUCT, 
        product
    }
}

export const actEditProductRequest = (id) =>{
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actEditProduct(res.data));
        });
    }
}

export const actEditProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCT, 
        product
    }
}

export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATA_PRODUCT, 
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}
