import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import EditStudent from '../Body/EditStudent'
import Students from '../Body/Students'
import AddNewStudent from '../Body/AddNewStudent'

function RootRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Students />} />
        <Route path='/edit' element={<EditStudent />} />
        {/* <Route path='/add' element={<AddNewStudent />} /> */}
      </Routes>
    </Router>
  )
}

export default RootRouter
