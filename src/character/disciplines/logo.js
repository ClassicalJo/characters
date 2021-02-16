import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {capitalize} from "../../dataContext/formatHooks"
let Logo = ({ discipline, src, show }) => {
    return (
        <div className="logo" onClick={() => show(discipline)}>
            <div className='logo-card'>
                <div className='logo-img'><img src={src} /></div>
                <p className="logo-title">{capitalize(discipline.nombre)}</p>
            </div>
        </div>
    )
}

export default Logo
