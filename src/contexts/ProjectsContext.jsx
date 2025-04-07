import { createContext, useState, useEffect } from "react";

export const ProjectsContext = createContext()
export const ProjectsProvider = ({children}) => {
    const apiUri = "https://localhost:7040/api/projects"

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
    };

    const createProject = async (newProject) => {
        setLoading(true);
        try {
            console.log("New Project Data:", JSON.stringify(newProject));
            const res = await fetch(apiUri, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProject)
            });

            if (res.ok) {
                const createdProject = await res.json();
                setProjects([...projects, createdProject]);
            }
        } catch (err) {
            console.log(err.message);
        }
        setLoading(false);
    };

    const updateProject = async (projectId, updatedData) => {
        setLoading(true);
        try {
            const res = await fetch(`${apiUri}/${projectId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedData)
            });

            if (res.ok) {
                const updatedProject = await res.json();
                setProjects(projects.map(project => 
                    project.id === projectId ? updatedProject : project
                ));
            }
        } catch (err) {
            console.log(err.message);
        }
        setLoading(false);
    };

    const deleteProject = async (projectId) => {
        setLoading(true);
        try {
            const res = await fetch(`${apiUri}/${projectId}`, {
                method: "DELETE"
            });

            if (res.ok) {
                setProjects(projects.filter(project => project.id !== projectId));
            }
        } catch (err) {
            console.log(err.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        getProjects();
    }, []);

    useEffect(() => {
        getProjects()
    },[])

    return (
        <ProjectsContext.Provider value = {{projects,
        loading,
        getProjects,
        createProject,
        updateProject,
        deleteProject
        }}>
        {children}
        </ProjectsContext.Provider>
    )
}