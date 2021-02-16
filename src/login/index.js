import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { useAuth } from "../dataContext/auth"
let Login = () => {
    let [isLoggedIn, setLoggedIn] = useState(false)
    let [userName, setUserName] = useState("")
    const { setAuthTokens, authTokens } = useAuth()
    function exists(str) {
        let characters = ['helena', "viktor", 'selene', 'tobias', 'talor']
        return characters.indexOf(str) !== -1
    }

    function verify() {
        let name = userName.toLowerCase()
        if (exists(name)) {
            setAuthTokens(name)
            setLoggedIn(true)
        }
    }
    if (authTokens !== null) return <Redirect to={`/${authTokens}`} />
    return (
        <div className='page'>
            <p><input type="text" placeholder="Usuario" value={userName} onChange={e => setUserName(e.target.value)} /></p>
            <p><input type='button' value="Login" onClick={verify} /></p>
        </div >
    )
}

export default Login
