import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from '../components/Navbar'

const AllRoutes = () => {
  return (
    <div>
<Routes>
    <Route path="/navbar" element={<Navbar/>}/>
</Routes>

    </div>
  )
}

export default AllRoutes