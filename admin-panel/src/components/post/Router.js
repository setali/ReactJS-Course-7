import { Route, Routes } from 'react-router-dom'
import Full from './Full'
// import List from './List'
import React, { Suspense } from 'react'
import Loading from 'components/utils/Loading'

const List = React.lazy(() => import('./List'))

export default function Router () {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<Loading />}>
            <List />
          </Suspense>
        }
      />
      <Route path='/:id' element={<Full />} />
    </Routes>
  )
}
