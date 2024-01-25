import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    totalPrices: 0,
}

const cartReducer = (state = initialState, action) => {
    //Condition
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return {
                ...initialState,
                 products: [...initialState.products, action.payload],
            };

        default:
            return state;
    }
};

export default cartReducer;