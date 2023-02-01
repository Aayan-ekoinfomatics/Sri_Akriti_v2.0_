import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRouteAdmin = () => {
  return localStorage.getItem("user_type" ) === 'admin' && localStorage.getItem("status") === "true" ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRouteAdmin