import React from 'react'
import { ToastContainer } from 'react-toastify'
import UserRoutes from './Routes/UserRoutes'

export default function App() {
  return (
    <div>
    <ToastContainer/>
    <UserRoutes></UserRoutes>
    </div>
  )
}
