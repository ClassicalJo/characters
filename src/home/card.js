import React from 'react'
import { Link } from 'react-router-dom'

let Card = ({ src, title, to }) => {
    return (
        <div className="card">
            <Link to={to}>
                <div className="circle">
                    <img width="100%" src={src}></img>
                </div>
                <p>{title}</p>
            </Link>
        </div >
    )
}

export default Card
