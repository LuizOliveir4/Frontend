import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
        <Routes>
            <Route path="/" element={<Clients/>}/>
            <Route path="/admin/clients" element={<Clients/>}/>
        </Routes>
  )
}

export default Routing