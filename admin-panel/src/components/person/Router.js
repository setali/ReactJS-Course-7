import { Route, Routes } from 'react-router-dom'
import List from './List'
import New from './New'
import Full from './Full'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/new' element={<New />} />
      <Route path='/:id' element={<Full />} />
    </Routes>
  )
}
