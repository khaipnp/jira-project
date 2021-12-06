import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/User/Home'
import Management from './pages/User/Management'
import Register from './pages/User/Register'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/management' element={<Management />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	)
}

export default App
