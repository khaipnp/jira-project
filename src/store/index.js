import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reduce.root'

// Qua file reduce.root.js khai bác các reducer
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
