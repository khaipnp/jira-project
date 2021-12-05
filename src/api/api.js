import axios from 'axios'

export const get = () => {
	return axios.get('https://jsonplaceholder.typicode.com/posts')
}
