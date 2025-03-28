import { createContext, useState, useEffect } from "react";

export const MembersContext = createContext()
export const MembersProvider = ({children}) => {
    const apiUri = "https://localhost:7124/api/members"

    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(false)

    const getMembers = async () => {
        setLoading(true)
        try {
            const res = await fetch(apiUri)

            if (res.ok) {
                const data = await res.json()
                setMembers(data)
            }
        }
        catch(err) {
            console.log(err.message)
        }

        setLoading(false)
    }

    useEffect(() => {
        getMembers()
    },[1])

    return (
        <MembersContext.Provider value = {{members, loading, getMembers}}>
        {children}
        </MembersContext.Provider>
    )
}