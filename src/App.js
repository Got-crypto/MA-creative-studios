import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Dashboard = lazy(()=> import('./page/Dashboard'))

export default function App(){
  return (
    <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Routes>
              <Route path='/' element={<Dashboard/>} />
          </Routes>
        </Suspense>
    </Router>
  )
}