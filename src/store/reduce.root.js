import { combineReducers } from 'redux'
import postReducer from './reducer/post.reducer'

const rootReducer = combineReducers({
	post: postReducer
})

export default rootReducer
