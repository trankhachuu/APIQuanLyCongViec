import * as Types from './../constants/ActionTypes';

var initiaState = {};

const editprodut = (state = initiaState, action) => {
    switch(action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default : return state;
    }
}

export default editprodut;