import React, { useState } from 'react'
import Logo from './logo'
import animalismo from "../../assets/images/d_animalismo.png"
import auspex from "../../assets/images/d_auspex.png"
import celeridad from "../../assets/images/d_celeridad.png"
import dominacion from "../../assets/images/d_dominacion.png"
import fortaleza from "../../assets/images/d_fortaleza.png"
import ofuscacion from "../../assets/images/d_ofuscacion.png"
import presencia from "../../assets/images/d_presencia.png"
import protean from "../../assets/images/d_protean.png"
import taumaturgia from "../../assets/images/d_taumaturgia.png"
import ankh from "../../assets/images/v_ankh.png"
import Info from './info'

let Disciplines = ({ stats }) => {
    let src = { animalismo, auspex, celeridad, dominacion, fortaleza, ofuscacion, presencia, protean, taumaturgia }
    let [showInfo, setShowInfo] = useState(false)
    let [info, setInfo] = useState(null)
    let showDisciplines = obj => {
        setInfo(obj)
        setShowInfo(true)
    }
    let hideDisciplines = () => setShowInfo(false)


    if (showInfo) return (
        <Info
            show={showDisciplines}
            hide={hideDisciplines}
            discipline={info}
            value={stats[info]}
        />)
    return (
        <div className="disciplines-wrapper">
            <p >Poderes:</p>
            <div className="disciplines">
                <Logo
                    discipline={{ nombre: "vitae", nivel: 1, senda: null }}
                    src={ankh}
                    show={showDisciplines}
                />
                {Object.keys(stats).map((key, index) => (
                    <Logo
                        key={`disciplinesLogo${index}`}
                        discipline={stats[key]}
                        src={src[stats[key].nombre]}
                        show={showDisciplines}
                    />))}</div >
        </div>
    )
}

export default Disciplines
