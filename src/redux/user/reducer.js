import UserActionTypes from "./action-types";

const initialState = {
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
    //É melhor se usar um Switch no lugar do if
    if (action.type === UserActionTypes.LOGIN) {
        return { ...state, currentUser: action.payload };
    }

    if (action.type === UserActionTypes.LOGOUT) {
        return { ...state, currentUser: null };
    }

    return state;
};

export default userReducer;