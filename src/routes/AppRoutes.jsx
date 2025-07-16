// React Router DOM
import { Routes, Route, Navigate } from 'react-router-dom'

// Form
import { CadastroEmpresa } from '../pages/empresas/cadastro/CadastroEmpresa'

// Login 
import { Login } from '../pages/login/Login'

function AppRoutes() {
  return (
    <Routes>

      <Route
        path='/formulario'
        element={<CadastroEmpresa/>}
      />

      <Route
        path='/login'
        element={<Login/>}
      />

      <Route
        path='*'
        element={<Navigate to='/login' />}
      />
    </Routes>
  )
}

export default AppRoutes