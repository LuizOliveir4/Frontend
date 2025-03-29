import React, { useContext } from 'react'
import { ProjectsContext } from '../../../contexts/ProjectsContext'
import ModalButton from '../partials/components/ModalButton'

const Projects = () => {
const { projects, loading } = useContext(ProjectsContext)

  return (
    <div id="projects">
      {
        projects.map(project => (
          <div key={project.id} className="page-header">
          <h1 className="h2"> {project.projectName} </h1>
          <ModalButton type="add" target="#addProjectModal" text="Add Project" />
        </div>
        ))
      }
    </div>
  )
}

export default Projects