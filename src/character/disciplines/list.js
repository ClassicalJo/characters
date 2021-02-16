let sangre = "La senda de la sangre"
let elemental = "Dominio elemental"

let List = {
    vitae: {
        sanar: {
            title: "Regeneracion vampirica",
            effect: "Recuperas un nivel de salud. Para que la curacion tenga lugar debes estar descansando y en relativa inactividad.",
            castingTime: "Un turno.",
            cost: 1,
            level: 1,
            senda: null,
        },
        buffear: {
            title: "Mejora vampirica",
            effect: "Ganas +1 a fuerza o reflejos por el resto de la escena.",
            castingTime: "Instantaneo",
            cost: 1,
            level: 1,
            senda: null,
        },
        despertar: {
            title: "Despertar",
            effect: "Cura el estado de inconsciencia.",
            cost: 1,
            castingTime: "Un turno",
            level: 1,
            senda: null,
        }
    },
    animalismo: {
        susurros: {
            title: "Susurros salvajes",
            effect: "Haz contacto visual con un animal y haz una tirada de persuasion/engaño. De acuerdo a la cantidad de exitos el animal obedecera tus ordenes.",
            cost: 0,
            castingTime: "Inmediato",
            level: 1,
            senda: null
        },
        llamada: {
            title: "La llamada",
            effect: "Haz la llamada de un animal y haz una tirada de supervivencia. Convocas animales de la zona segun los exitos obtenidos.",
            cost: 0,
            castingTime: "Inmediato",
            level: 2,
            senda: null,
        }
    },
    auspex: {
        sentidos: {
            title: "Sentidos agudizados",
            effect: "Incrementa de forma sobrenatural uno o hasta todos tus sentidos. Recibes mas informacion del mundo que te rodea por el resto de la escena.",
            cost: 0,
            castingTime: "Inmediato",
            level: 1,
            senda: null
        },
        aura: {
            title: "Percepcion del aura",
            effect: "Puedes ver las auras psiquicas. Haz una tirada de percepcion contra dificultad 4. Segun los exitos distingues una cantidad de colores del aura. De acuerdo al color, puedes determinar su estado emocional.",
            cost: 0,
            castingTime: "Inmediato",
            level: 2,
            senda: null,
        }
    },
    celeridad: {
        celeridad1: {
            title: "Celeridad 1",
            effect: "Habilidad pasiva: Tu velocidad aumenta a 35 pies. Activacion: Ganas +1 a reflejos. Puedes realizar acciones multiples sin penalizacion.",
            cost: 1,
            castingTime: "Instantaneo",
            level: 1,
            senda: null
        },
        celeridad2: {
            title: "Celeridad 2",
            effect: "Habilidad pasiva: Tu velocidad aumenta a 40 pies. Activacion: Ganas +2 a reflejos. Puedes realizar acciones multiples sin penalizacion.",
            cost: 1,
            castingTime: "Instantaneo",
            level: 2,
            senda: null,
        }
    },
    dominacion: {
        orden: {
            title: "Orden",
            effect: "Mira a los ojos del objetivo y haz una tirada de persuasion/engaño. Pronuncia una orden de una palabra, el objetivo la obedece de acuerdo a la cantidad de exitos.",
            cost: 0,
            castingTime: "Inmediato",
            level: 1,
            senda: null,
        },
        mesmerismo: {
            title: "Mesmerismo",
            effect: "Mira los ojos del objetivo y haz una tirada de persuasion. Implantas un pensamiento falso o sugestion hipnotica en el objetivo.",
            cost: 0,
            castingTime: "Un turno",
            level: 2,
            senda: null,
        }
    },
    fortaleza: {
        fortaleza1: {
            title: "Fortaleza 1",
            effect: "Pasiva: Una vez por dia, puedes tratar una herida agravada como una herida letal. Activa: +1 armadura por una escena",
            cost: 1,
            castingTime: "Instantaneo",
            level: 1,
            senda: null,
        },
        fortaleza2: {
            title: "Fortaleza 2",
            effect: "Pasiva: Dos veces por dia, puedes tratar una herida agravada como una herida letal. Activa: +2 armadura por una escena",
            cost: 1,
            castingTime: "Instantaneo",
            level: 2,
            senda: null,
        },
    },
    ofuscacion: {
        capa: {
            title: "Capa de sombras",
            effect: "Eres invisible mientras permanezcas quieto en las sombras.",
            cost: 0,
            castingTime:"Instantaneo",
            level: 1,
            senda: null,
        },
        presencia: {
            title: "Presencia invisible",
            effect: "Eres absolutamente ignorado. Para realizar alguna accion peligrosa sin ser descubierto haz una tirada de ocultacion.",
            cost: 0,
            castingTime:"Inmediato",
            level: 2,
            senda: null,
        }
    },
    presencia: {
        fascinacion: {
            title: "Fascinacion",
            effect: "Haz una tirada de persuasion. Atraes a una multitud de gente segun la cantidad de exitos obtenidos.",
            cost: 0,
            castingTime: "Un turno",
            level: 1,
            senda: null,
        },
        mirada: {
            title: "Mirada aterradora",
            effect: "Mira a los ojos del objetivo y haz una tirada de enganio. El objetivo resulta asustado segun la cantidad de exitos. Extendible.",
            cost: 0,
            castingTime: "Inmediato/Varios turnos",
            level: 2,
            senda: null,
            
        }
    },
    protean: {
        ojos: {
            title:"Los ojos de la bestia",
            effect: "A partir del proximo turno puedes ver en la oscuridad total.",
            cost: 0,
            castingTime: "Instantaneo",
            level: 1,
            senda: null,
        },
        garras: {
            title:"Garras salvajes",
            effect: "A partir del proximo turno tus manos se vuelven garras bestiales por una escena. +1 a las tiradas de ataque con tus garras.",
            cost: 1,
            castingTime: "Instantaneo",
            level: 2,
            senda: null,
        }
    },
    taumaturgia: {
        sabor: {
            title: "El sabor de la sangre",
            effect: "Prueba una gota de sangre y haz una tirada de inteligencia. La cantidad de exitos determina el nivel de informacion del objetivo.",
            cost: 1,
            castingTime: "Un turno",
            level: 1,
            senda: sangre,
        },
        furia: {
            title: "La furia de la sangre",
            effect: "Toca al objetivo y haz una tirada de inteligencia. El objetivo debe gastar un punto de sangre por cada exito obtenido o la vomita.",
            cost: 1,
            castingTime: "Un turno",
            level: 2,
            senda: sangre
        },
        fuerza: {
            title: "Fuerza elemental",
            effect: "Toca la tierra y haz una tirada de inteligencia. Ganas 3 puntos repartidos entre fuerza y armadura durante un turno por cada exito obtenido.",
            cost: 1,
            castingTime: "Inmediato",
            level: 1,
            senda: elemental,
        },
        idiomas: {
            title: "Idiomas inanimados",
            effect: "Te permite hablar con un objeto inanimado. Haz una tirada de inteligencia. Obtienes informacion de acuerdo a la cantidad de exitos.",
            cost: 1,
            castingTime: "Un turno",
            level: 2,
            senda: elemental,
        },

    }
}
export default List
