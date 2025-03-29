import {useRoutes, Navigate} from 'react-router-dom'
import Layout from './pages/layouts/PortalLayout'
import AuthLayout from './pages/layouts/CenterScreenLayout'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Clients from './pages/protected/admin/Clients'
import { ClientsProvider } from './contexts/ClientsContext'
import Members from './pages/protected/admin/Members'
import Projects from './pages/protected/admin/Projects'
import { ProjectsProvider } from './contexts/ProjectsContext'
import { MembersProvider } from './contexts/MembersContext'

const isAuthenticated = true
const isAdmin = true

const ProtectedRoute = ({children}) => isAuthenticated ? children : <Navigate to = "/signin" replace />
const AdminRoute = ({children}) => isAuthenticated && isAdmin ? children : <Navigate to = "/admin/projects" replace />

const routesConfig = [
  {
    element: <AuthLayout/>,
    children: [
      { path: "/signin", element: <SignIn/> },
      { path: "/signup", element: <SignUp/> }
    ]
  },
  {
    element: (<ProtectedRoute><Layout/></ProtectedRoute>),
    children: [
      { path: "/admin/projects", element: <ProjectsProvider><Projects/></ProjectsProvider> },
      { path: "/admin/members", element: <AdminRoute><MembersProvider><Members/></MembersProvider></AdminRoute> },
      { path: "/admin/clients", element: <AdminRoute><ClientsProvider><Clients/></ClientsProvider></AdminRoute> },
      { path: "/", element: <Navigate to = "/admin/projects" replace /> }
    ]
  },
  { path: "*", element: <Navigate to = "/signin" replace />  }
]

function App() {
  const routing = useRoutes(routesConfig)
  return routing
}

export default App
