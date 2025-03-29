import React, { useContext } from 'react'
import ModalButton from '../partials/components/ModalButton'
import { ProjectsContext } from '../contexts/ProjectsContext'

const Projects = () => {
    const { projects, loading } = useContext(ProjectsContext)
  return (
    <div id="projects">
      <div className="page-header">
        <h1 className="h2">Projects</h1>
        <ModalButton type="add" target="#addProjectModal" text="Add Project" />
      </div>
      {
        projects.map(project => (
          <div key={project.id}> {project.projectName} </div>
        ))
      }
    </div>
  )
}

export default Projects