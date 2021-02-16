import React from 'react'
import Attribute from './attribute'

let Attributes = ({ stats }) => {
    return (
        <div className='attributes'>
            <Attribute stat="Fuerza" value={stats.fuerza} />
            <Attribute stat="Reflejos" value={stats.destreza} />
            <Attribute stat="Inteligencia" value={stats.inteligencia} />
        </div>
    )
}

export default Attributes
