import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './page/Dashboard'

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}