import Context from "./context"
import React, { useState } from 'react'
import database from "../database"

let Provider = props => {
    const [characters, setCharacters] = useState(database)
    return (
        <Context.Provider value={characters}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider
