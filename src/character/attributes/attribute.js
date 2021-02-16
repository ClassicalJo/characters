import React from 'react'
import Block from './block'

let Attribute = ({ stat, value }) => {
    return (
        <div className='attribute'>
            <p>{stat}</p>
            <Block value={value} />
        </div>
    )
}

export default Attribute
