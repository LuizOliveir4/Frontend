import React from 'react'
import { AuthProvider } from './contexts/AuthContext'
import { ProjectsProvider } from './contexts/ProjectsContext'
import { MembersProvider } from './contexts/MembersContext'
import { ClientsProvider } from './contexts/ClientsContext'

const Providers = ({children}) => {
  return (
    <>
    <ProjectsProvider>
      <AuthProvider>
        <MembersProvider>
          <ClientsProvider>
            {children}
          </ClientsProvider>
        </MembersProvider>
      </AuthProvider>
    </ProjectsProvider>
    </>
  )
}

export default Providers