import React from 'react'
import LoginViewModel from '../Component/UserLogin/LoginViewModel'
import { Route, Routes } from 'react-router-dom'
import SignupViewModel from '../Component/UserSignup/SignupViewModel'
import Dashboard from "../Component/Dashboard/DashboardViewModel";
export default function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/auth/login' element={<LoginViewModel></LoginViewModel>}></Route>
        <Route path='/auth/signup' element={<SignupViewModel></SignupViewModel>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  )
}
