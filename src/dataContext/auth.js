import { createContext, useContext } from 'react'

export let AuthContext = createContext()

export let useAuth = () => {
    return useContext(AuthContext)
}
