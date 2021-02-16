import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from "./dataContext/auth"
let PrivateRoute = ({ component: Component, player, ...rest }) => {
    const { authTokens } = useAuth()
    return (
        <Route {...rest} render={props => {
            switch (authTokens !== null) {
                case true: return <Component player={player} token={authTokens} />
                default: return <Redirect to="/login" />
            }
        }} />
    )
}

export default PrivateRoute
