import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Students from '../body/Students'
import AddNewStudent from '../body/AddNewStudent'
import EditStudent from '../body/EditStudent'

function RootRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Students />} />
        <Route path='/edit' element={<EditStudent />} />
        <Route path='/add' element={<AddNewStudent />} />
      </Routes>
    </Router>
  )
}

export default RootRouter
