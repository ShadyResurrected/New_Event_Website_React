import React from 'react'

import { Navigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'

const ProtectedRoute = ({children}) => {
    
    let auth = false;
    if(!auth){
        toast.error("Login First")
        return <Navigate to='/login' />
    }
  return children
}

export default ProtectedRoute