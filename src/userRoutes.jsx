import React from 'react'
import { Routes,Route } from 'react-router-dom'
import User from './pages/user'
import {UserLayout} from './userLayout'

export const UserRoutes = () => {
  return (
    <div>
      <UserLayout />
      <Routes>  
          
          <Route path=":id" element={<User />} />
      </Routes>
    </div>
  )
}
