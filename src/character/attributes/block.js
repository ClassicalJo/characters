import React from 'react'

let Block = ({ value }) => {
    let arr = Array(2).fill(false)
    for (let i = 0; i < value; i++) {
        arr[i] = true
    }
    return (
        <svg viewBox='0 0 100 25'>
            <rect width="50" height="25" stroke="#306BAC" fill={(arr[0]) ? "#141BAC" : "transparent"} />
            <rect x="50" width="50" height="25" stroke="#306BAC" fill={(arr[1]) ? "#141BAC" : "transparent"} />
        </svg>
    )
}

export default Block
