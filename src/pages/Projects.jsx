import React, { useContext, useState } from 'react'
import ModalButton from '../partials/components/ModalButton'
import { ProjectsContext } from '../contexts/ProjectsContext'
import CreateProjectForm from '../pages/forms/CreateProjectForm'

const Projects = () => {
    const { loading, projects, createProject } = useContext(ProjectsContext);
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="projects">
      <div className="page-header">
        <h1 className="h2">Projects</h1>
        <ModalButton type="add" onClick={() => setIsOpen(true)} text="Add Project" />
        {isOpen && (
              <div style={popupStyle}>
                <CreateProjectForm createProject={createProject} />
                <button className="close" onClick={() => setIsOpen(false)}> Close </button>
              </div>
            )
          }
      </div>
      {
        projects.map(project => (
          <div key={project.id}> {project.projectName} </div>
        ))
      }
    </div>
  )
};

const popupStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  backgroundColor: "white",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
};

export default Projects