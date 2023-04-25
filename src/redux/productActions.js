import {ActionTypes} from './actionTypes';

export const addMessage =  (message) => {
    return {
        type: ActionTypes.ADD_MESSAGE,
        message,
    }
}

export const deleteMessage = (index) => {
    return{
        type: ActionTypes.DELETE_MESSAGE,
        index,
    }
}

// export const addInputs = (inputs) => {
//     return{
//         type: ActionTypes.SET_INPUTS,
//         inputs,
//     }
// }

// export const removeInputs = () => {
//     return {
//         type: ActionTypes.REMOVE_INPUTS,
//     }
// }