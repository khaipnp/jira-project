import axios from 'axios'
import store from '../store'

// Cập nhật URL API ở file ENV
const instance = axios.create({
	// baseURL: `${process.env.REACT_APP_API}`
	baseURL: `http://localhost:3000`
})

instance.interceptors.request.use(
	request => {
		const { token } = store.getState().auth
		if (token) request.headers.Authorization = `Bearer ${token}`
		return request
	},
	error => {
		return Promise.reject(error)
	}
)

export default instance
