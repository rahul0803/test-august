import { SELECT_ITEM } from "./ActionTypes"


export const selectItem = (item) => {
    return {
        type: SELECT_ITEM,
        payload: item
    }
}