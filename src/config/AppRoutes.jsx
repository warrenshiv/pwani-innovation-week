import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Speakers from '../pages/Speakers'
import Schedule from '../pages/Schedule'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='speakers' element={<Speakers />} />
      <Route path='schedule' element={<Schedule />} />
      <Route path='' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
