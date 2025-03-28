import {useRoutes, Navigate} from 'react-router-dom'
import Layout from './pages/layouts/Layout'
import AuthLayout from './pages/layouts/AuthLayout'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Clients from './pages/protected/admin/Clients'
import Members from './pages/protected/admin/Members'
import Projects from './pages/protected/admin/Projects'

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
      { path: "/admin/projects", element: <Projects/> },
      { path: "/admin/members", element: <AdminRoute><Members/></AdminRoute> },
      { path: "/admin/clients", element: <AdminRoute><Clients/></AdminRoute> },
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
