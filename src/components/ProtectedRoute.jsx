import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const userLoggedIn = localStorage.getItem('userLoggedIn')
    if (!userLoggedIn) return <Navigate to='/login' />
  return (
    <Outlet />
  )
}

export default ProtectedRoute