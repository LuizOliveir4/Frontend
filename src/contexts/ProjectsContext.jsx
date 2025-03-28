import { createContext, useState, useEffect } from "react";

export const ProjectsContext = createContext()
export const ProjectsProvider = ({children}) => {
    const apiUri = "https://localhost:7124/api/projects"

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)

    const getProjects = async () => {
        setLoading(true)
        try {
            const res = await fetch(apiUri)

            if (res.ok) {
                const data = await res.json()
                setProjects(data)
            }
        }
        catch(err) {
            console.log(err.message)
        }

        setLoading(false)
    }

    useEffect(() => {
        getProjects()
    },[1])

    return (
        <ProjectsContext.Provider value = {{projects, loading, getProjects}}>
        {children}
        </ProjectsContext.Provider>
    )
}