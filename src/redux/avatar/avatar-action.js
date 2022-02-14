import * as actionTypes from './avatar-types'


export const loadParentItem = (item) => {
    return {
        type: actionTypes.load_parent_item,
        payload: item
    }
}
export const loadChildItem = (item) => {
    return {
        type: actionTypes.load_child_item,
        payload: item
    }
}