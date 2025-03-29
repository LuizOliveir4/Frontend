import {useRoutes, Navigate} from 'react-router-dom'
import Layout from '../src/pages/layouts/PortalLayout'
import AuthLayout from '../src/pages/layouts/CenterScreenLayout'
import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'
import Clients from '../src/pages/protected/admin/Clients'
import { ClientsProvider } from '../src/contexts/ClientsContext'
import Members from '../src/pages/protected/admin/Members'
import Projects from '../src/pages/protected/admin/Projects'
import { ProjectsProvider } from '../src/contexts/ProjectsContext'
import { MembersProvider } from '../src/contexts/MembersContext'

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
