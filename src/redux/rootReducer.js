import  { combineReducers } from "redux"; 
import avatar_reducer from './avatar/avatar-reducer.js'

const rootReducer = combineReducers({
    avatar: avatar_reducer
})

export default rootReducer;