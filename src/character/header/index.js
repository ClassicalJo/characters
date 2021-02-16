import React from 'react'
import Logout from '../Logout'

let Header = ({ names }) => {
    return (
        <div className="header">
            <p>{names}</p>
            <Logout />
        </div>
    )
}

export default Header
