import { createContext, useState, useEffect } from "react";

export const ClientsContext = createContext()
export const ClientsProvider = ({children}) => {
    const apiUri = "https://localhost:7124/api/clients"

    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(false)

    const getClients = async () => {
        setLoading(true)
        const res = await fetch(apiUri)
        if (res.ok){
            const data = await res.json()
            setClients(data)
        }
        setLoading(false)
    }

    useEffect(() => {
        getClients()
    })

    return (
        <ClientsContext.Provider value = {{clients, loading, getClients}}>
        {children}
        </ClientsContext.Provider>
    )
}