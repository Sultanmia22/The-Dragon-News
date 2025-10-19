import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import LoadingPage from '../Components/LoadingPage';

const PrivetRoutes = ({children}) => {

    const location = useLocation()


    const {user,loading} = use(AuthContext)

    if(loading){
        return <LoadingPage/>
    }

    else if(user){
        return children
    }

    else{
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
};

export default PrivetRoutes;