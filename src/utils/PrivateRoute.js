import React from 'react';
import { Navigate, Route } from "react-router-dom";
import {ACCESS_TOKEN_NAME} from '../constants/apiConstants';
// import axios from 'axios';
function PrivateRoute ({ children}) {
    const isAuthenticated = localStorage.getItem(ACCESS_TOKEN_NAME);

    // try{
    //     await axios.post(API_BASE_URL+'/users/verify', {}, {headers: {'Authorization': `Bearer ${authCode}`}});
    //
    //     return children;
    // } catch (e) {
    //     return <Navigate to="/login" />
    // }

    if (isAuthenticated) {
        return children
    }

    return <Navigate to="/login" />
}

export default PrivateRoute;