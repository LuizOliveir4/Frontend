import {useRoutes, Navigate} from 'react-router-dom'

const isAuthenticated = true
const isAdmin = true

const ProtectedRoute = ({children}) => isAuthenticated ? children : <Navigate to = "/login" replace />
const AdminRoute = ({children}) => isAuthenticated && isAdmin ? children : <Navigate to = "/projects" replace />

const routesConfig = []

function App() {
  const routing = useRoutes(routesConfig)
  return routing
}

export default App
