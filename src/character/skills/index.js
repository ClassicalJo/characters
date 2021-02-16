import React from 'react'
import Block from '../attributes/block'

let Skills = ({ stats, title }) => {
    let arr = Object.keys(stats)
    return (
        <div
            className="skill">
            <p className="skill-title">{title}</p>
            {arr.map((key, index) => (
                <div key={`skillBlock${index}`} className="skill-entry">
                    <p>{key}</p>
                    <Block value={stats[key]} />
                </div>
            ))}
        </div>
    )
}

export default Skills
