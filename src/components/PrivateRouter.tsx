import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import Login from '../pages/login/Login'

export default function PrivateRouter(props: any) {
    const login = useSelector((state:AppState) => state.login)
    if (login?.userInfo?.name) {
        return <Route {...props} />
    }
    return <Login />
}
