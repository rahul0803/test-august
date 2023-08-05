import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "../actions/ActionTypes";


//// Initial state of the Application
let initialState = {
    loading: false,
    data: [],
    error: ""
}

const ActionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return { ...state, loading: true }
        case FETCH_SUCCESS:
            return { ...state, data: action.payload, error: "", loading: false }
        case FETCH_FAILURE:
            return {...state, data: [], error: action.payload, loading: false}  
        default:
            return state  
    }
}

export default ActionReducer