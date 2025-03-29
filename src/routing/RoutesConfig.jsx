import React from 'react';
import { Navigate } from 'react-router-dom';
import { AdminRoute, ProtectedRoute } from './ProtectedRoutes'

import PortalLayout from '../pages/layouts/PortalLayout'
import CenterScreenLayout from '../pages/layouts/CenterScreenLayout'

import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Projects from '../pages/Projects'
import Members from '../pages/Members'
import Clients from '../pages/Clients'

import { ProjectsProvider } from '../contexts/ProjectsContext'
import { MembersProvider } from '../contexts/MembersContext'
import { ClientsProvider } from '../contexts/ClientsContext'

const routesConfig = [
  {
    element: <CenterScreenLayout />,
    children: [
      { path: "/auth/signup", element: <SignUp /> },
      { path: "/auth/signin", element: <SignIn /> }
    ]
  },
  {
    element: (
      <ProtectedRoute>
        <PortalLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/admin/projects", element: <ProjectsProvider><Projects/></ProjectsProvider> },
      { path: "/admin/members", element: <AdminRoute><MembersProvider><Members/></MembersProvider></AdminRoute> },
      { path: "/admin/clients", element: <AdminRoute><ClientsProvider><Clients/></ClientsProvider></AdminRoute> },
      { path: "*", element: <Navigate to="/admin/projects" replace /> }
    ]
  },

]

export default routesConfig;