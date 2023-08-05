import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./ActionTypes";
import axios from "axios";


export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchSuccess = (items) => {
    return {
        type: FETCH_SUCCESS,
        payload: items
    }
}

export const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}



//// API calling using redux-thunk
export const fetchItems = () => {
    return (dispatch) => {
        dispatch(fetchRequest());

        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => dispatch(fetchSuccess(response.data)))
        .catch(error => dispatch(fetchFailure(error.message)))
    }
}