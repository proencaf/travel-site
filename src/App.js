import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Activities from './routes/Activities'
import Contact from './routes/Contact'
import './index.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
