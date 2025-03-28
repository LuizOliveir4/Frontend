import React, { useContext } from 'react'
import { ProjectsContext } from '../../../contexts/ProjectsContext'

const Projects = () => {
const { projects, loading } = useContext(ProjectsContext)

  return (
    <div>
      {
        projects.map(project => (
          <div key={project.id}> {project.projectName} </div>
        ))
      }
    </div>
  )
}

export default Projects