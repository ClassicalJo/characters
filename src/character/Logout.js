import React from 'react'
import {useAuth} from "../dataContext/auth"

let Logout = () => {
    let { setAuthTokens } = useAuth()
    let logout = () => {
        setAuthTokens(null)
        localStorage.removeItem('tokens')
    }
    return (
        <input className="logout" type="button" value="Logout" onClick={logout} />
    )
}

export default Logout
