import React from 'react'

import { Navigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import { useAuth } from '../Context/AuthContext';

const ProtectedRoute = ({children}) => {
    const {isAuthorized} = useAuth()
    if(!isAuthorized){
        toast.error("Login First")
        return <Navigate to='/login' />
    }
  return children
}

export default ProtectedRoute