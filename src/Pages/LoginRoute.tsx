import { type JSX } from 'react'
import { isAuthenticated } from '../Utils/Auth'
import { Navigate } from 'react-router-dom'

const LoginRoute = ({children}:{children:JSX.Element}) => {
    if(isAuthenticated()){
        return <Navigate to='/home' replace />
    }
  return children;
}

export default LoginRoute