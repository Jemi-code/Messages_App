import { ActionTypes } from "./actionTypes";
import { combineReducers } from "redux";

const initialState = [
        {title: "Hi",
        messageTxt: "I am Jemimah"},
]

const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.ADD_MESSAGE:
            return [...state, action.message];
        case ActionTypes.DELETE_MESSAGE:
            return state.filter((mess, index) => {
                return index !== action.index;
            })
        default:
            return state;
    }
}

// const inputsReducer = (state = {}, action) => {
//     switch(action.type){
//         case ActionTypes.SET_INPUTS:
//             return Object.assign({}, action.inputs);
//         case ActionTypes.REMOVE_INPUTS:
//             return {};
//         default: 
//             return state;
//     }
// }


export const reducers = combineReducers({
    messageReducer,
    //inputsReducer,
})