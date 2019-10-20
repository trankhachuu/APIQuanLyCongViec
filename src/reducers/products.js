import * as Types from './../constants/ActionTypes'; 
var initialState = [
];

var findIndex = (products, id) => {
    var result = null;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

const products = (state = initialState , action) => {
    var data = -1;
    var {id, product} = action;
    switch(action.type){
        case  Types.FETCH_PRODUCT:
            state = action.products;
            return[...state];
        case Types.DELETE_PRODUCT : 
            data = findIndex(state, id)
            state.splice(data, 1);
            return [...state]
        case Types.ADD_PRODUCT : 
            state.push(action.product);
            return [...state];
        case Types.UPDATA_PRODUCT:
            data = findIndex(state, product.id);
            state[data] = product;
            return [...state];
        default : return [...state];
    }
}

export default products;