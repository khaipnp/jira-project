import * as ActionType from '../action.type'

// Khai báo State ban đầu
const initState = {
	posts: [],
	load: false
}

const postReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionType.LOGIN_TEST:
			return {
				...state,
				load: true
			}
		case ActionType.LOGIN_TEST2:
			const { data } = action.payload
			return {
				...state,
				posts: data,
				load: false
			}
		default:
			return state
	}
}

export default postReducer
