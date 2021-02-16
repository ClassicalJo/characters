import React from 'react'
import sheet from "../assets/images/sheet.svg"
import ink from "../assets/images/ink.svg"
import drop from "../assets/images/drop.svg"
import Card from './card'
let Home = () => {
    return (
        <div className="page">
            <h1>Buenos Aires de noche, 199x</h1>
            <div className="three-columns">
                <Card src={sheet} title={"Tu hoja de personaje"} to="/login"/>
                <Card src={ink} title={"Resumen de la historia"} to="/recap"/>
                <Card src={drop} title={"Protagonistas"} to="/characters"/>
            </div>
        </div>
    )
}

export default Home
