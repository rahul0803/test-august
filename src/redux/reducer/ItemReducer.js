import { SELECT_ITEM } from "../actions/ActionTypes";


let initialState = null

export const ItemReducer = (state = initialState, action) => {
switch(action.type){
    case SELECT_ITEM:
        return action.payload
    default: 
    return state
}
}