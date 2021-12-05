import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/User/Home'
import Management from './pages/User/Management'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/management' element={<Management />} />
			</Routes>
		</div>
	)
}

export default App
