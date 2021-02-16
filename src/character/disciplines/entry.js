import React, { useState } from 'react'

let Entry = ({ data }) => {
    let [expand, setExpand] = useState(false)
    let { title, cost, castingTime, effect } = data
    return (
        <div className="entry">
            <div className="entry-title" onClick={() => setExpand(!expand)}>{title}</div>
            {(expand) && (
                <div className='entry-details'>
                    <div>Efecto: {effect}</div>
                    <div>Sangre: {cost}</div>
                    <div>Activacion: {castingTime}</div>                    
                </div>
            )}




        </div>
    )
}

export default Entry
