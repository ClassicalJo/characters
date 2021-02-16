import React from 'react'
import Logout from './Logout'

let Denied = () => {
    return (
        <div className='page'>
            <p>Access denied.</p>
            <Logout />
        </div>
    )
}

export default Denied
