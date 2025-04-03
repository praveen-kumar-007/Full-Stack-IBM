import React from 'react'
import {Routes,Route } from 'react-router-dom'  

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/login" element={<login />} />
              <Route path="/product" element={<product />} />
        </Routes>
    </div>
  )
}

export default AllRoutes
