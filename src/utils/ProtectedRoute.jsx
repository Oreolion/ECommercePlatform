import {Navigate} from 'react-router-dom'
import { UserContext } from "../components/UserContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({children}) => {
    const {user} = useContext(UserContext)
    console.log(user);

    if (!user) return <Navigate to='/login' replace/>
  return children
     
}