import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  return localStorage.getItem("status" ) && localStorage.getItem('user_type') !== 'admin' ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute