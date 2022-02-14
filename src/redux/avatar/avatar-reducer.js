import * as actionTypes from './avatar-types'

const initialState = {
    parent_load:[],
    child_load:[]
}

const avatar_reducer= (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.load_parent_item:
    return { ...state, parent_load:action.payload.map(({name})=>{
        return name;
    }) }
    case actionTypes.load_child_item:
        return { ...state, child_load:[...state.child_load,action.payload]}
  default:
    return state
  }
}

export default avatar_reducer;