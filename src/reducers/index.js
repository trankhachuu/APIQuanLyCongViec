import { combineReducers } from 'redux';
import products from './products';
import editprodut from './editproduct';

const appReducers = combineReducers({
    products,
    editprodut
});

export default appReducers;