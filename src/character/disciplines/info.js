import React from 'react'
import Entry from './entry'
import List from "./list"
import { capitalize } from "../../dataContext/formatHooks"

let Info = ({ discipline, hide }) => {
    let { nombre, nivel, senda } = discipline
    let filter = Object.keys(List[nombre]).filter(key => List[nombre][key].level <= nivel && List[nombre][key].senda === senda)
    return (
        <div className="info">
            <div className='info-header'>
                <p>{capitalize(nombre)}</p>
                <input type='button' value="X" onClick={hide} />
            </div>

            <div className="info-list">
                {filter.map((key, index) => (<Entry key={`infoList${index}`} data={List[nombre][key]} />))}
            </div>

        </div>

    )
}

export default Info
