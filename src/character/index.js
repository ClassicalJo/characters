import React, { useContext } from 'react'
import Screen from "./Screen"
import Context from "../dataContext/context"
import Attributes from './attributes'
import Denied from './Denied'
import Header from './header'
import Player from './player'
import Skills from "./skills"
import Disciplines from './disciplines'
import { Route, Switch } from 'react-router'
let Character = ({ token, player, location }) => {
    let database = useContext(Context)
    if (token === null || token !== player) return <Denied />

    let char = database[token]
    let { fuerza, destreza, inteligencia } = char
    let { nombrePersonaje, nombreJugador, edad, altura, cuerpo, disposicion, clan } = char
    let { disciplinas } = char
    let { percepcion, autocontrol } = char
    let { atletismo, agarre, nadar, tirar } = char
    let { acrobacias, conducir, prestidigitacion, ocultacion } = char
    let { engano, persuasion, infiltracion, supervivencia } = char
    let { vocacion, proficiencia } = char
    return (<div className="page">
        <Screen>
            <Header names={nombrePersonaje} />
            {/* <Player stats={{ nombrePersonaje, nombreJugador, edad, altura, cuerpo, disposicion, clan }} /> */}
            <Attributes stats={{ fuerza, destreza, inteligencia }} />
            <Disciplines stats={disciplinas} />
        </Screen>
        <Screen>
            <div className="skills">
                <div className="column">
                    <Skills title={"Habilidades centrales"} stats={{ percepcion, autocontrol }} />
                    <Skills title={"Vocaciones"} stats={{ vocacion }} />
                    <Skills title={"Proficiencias"} stats={{ proficiencia }} />
                </div>
                <div className="column">
                    <Skills title={"Habilidades basadas en fuerza"} stats={{ atletismo, agarre, nadar, tirar }} />
                    <Skills title={"Habilidades basadas en destreza"} stats={{ acrobacias, conducir, prestidigitacion, ocultacion }} />
                    <Skills title={"Habilidades basadas en inteligencia"} stats={{ engano, persuasion, infiltracion, supervivencia }} />
                </div>
            </div>
        </Screen>
    </div >)
}

export default Character
