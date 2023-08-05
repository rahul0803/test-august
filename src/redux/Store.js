import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ActionReducer from "./reducer/ActionReducer";
import { ItemReducer } from "./reducer/ItemReducer";
import { combineReducers } from "redux";

//// Creating a store
const rootReducers = combineReducers({
    data: ActionReducer,
    post: ItemReducer
})

export const Store = createStore(rootReducers, applyMiddleware(thunk))