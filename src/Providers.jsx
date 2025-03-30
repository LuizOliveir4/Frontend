import React from 'react'
import { AuthProvider } from './contexts/AuthContext'
import { ProjectsProvider } from './contexts/ProjectsContext'
import { MembersProvider } from './contexts/MembersContext'
import { ClientsProvider } from './contexts/ClientsContext'

const Providers = ({children}) => {
  return (
    <>
    <AuthProvider>
      <MembersProvider>
        <ClientsProvider>
          <ProjectsProvider>
            {children}
          </ProjectsProvider>
        </ClientsProvider>
      </MembersProvider>
    </AuthProvider>
    </>
  )
}

export default Providers