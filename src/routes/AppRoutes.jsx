// React Router DOM
import { Routes, Route, Navigate } from 'react-router-dom'

// Form
import { CadastroEmpresa } from '../pages/empresas/cadastro/CadastroEmpresa'

function AppRoutes() {
  return (
    <Routes>

      <Route
        path='/formulario'
        element={<CadastroEmpresa/>}
      />

      <Route
        path='*'
        element={<Navigate to='/formulario' />}
      />
    </Routes>
  )
}

export default AppRoutes