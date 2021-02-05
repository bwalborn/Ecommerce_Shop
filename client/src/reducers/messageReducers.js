import { MESSAGE_CREATE_FAIL, MESSAGE_CREATE_REQUEST, MESSAGE_CREATE_RESET, MESSAGE_CREATE_SUCCESS, MESSAGE_DELETE_FAIL, MESSAGE_DELETE_REQUEST, MESSAGE_DELETE_SUCCESS, MESSAGE_DETAILS_FAIL, MESSAGE_DETAILS_REQUEST, MESSAGE_DETAILS_RESET, MESSAGE_DETAILS_SUCCESS, MESSAGE_LIST_FAIL, MESSAGE_LIST_REQUEST, MESSAGE_LIST_RESET, MESSAGE_LIST_SUCCESS } from "../constants/messageConstants";


export const messageCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case MESSAGE_CREATE_REQUEST:
            return { loading: true };
        case MESSAGE_CREATE_SUCCESS:
            return { loading: false, messageInfo: action.payload, success: true};
        case MESSAGE_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case MESSAGE_CREATE_RESET:
            return {};
        default:
            return state;
    }
}



export const messageDetailsReducer = (state = { message: {} }, action) => {
    switch (action.type) {
        case MESSAGE_DETAILS_REQUEST:
            return { ...state, loading: true };
        case MESSAGE_DETAILS_SUCCESS:
            return { loading: false, message: action.payload };
        case MESSAGE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case MESSAGE_DETAILS_RESET:
            return { message: {} };   // <= WILL RESET THE STATE: USERS
        default:
            return state;
    }
}



export const messageListReducer = (state = { messages: [] }, action) => {
    switch (action.type) {
        case MESSAGE_LIST_REQUEST:
            return { loading: true };
        case MESSAGE_LIST_SUCCESS:
            return { loading: false, messages: action.payload };
        case MESSAGE_LIST_FAIL:
            return { loading: false, error: action.payload };
        case MESSAGE_LIST_RESET:
            return { messages: [] }
        default:
            return state;
    }
}



export const messageDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case MESSAGE_DELETE_REQUEST:
            return { loading: true };
        case MESSAGE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case MESSAGE_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}