import React from 'react'

let Player = ({ stats }) => {
    let arr = Object.keys(stats)
    return (
        <div>

            {arr.map(key => <p>{key}: {stats[key]}</p>)}
        </div>
    )
}

export default Player
