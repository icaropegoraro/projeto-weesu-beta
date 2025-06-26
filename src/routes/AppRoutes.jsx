import { Routes, Route, Navigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { CadastroEmpresa } from '../pages/empresas/cadastro/CadastroEmpresa'

function AppRoutes() {
  return (
    <Routes>
      <Route
        path='/pagina-inicial'
        element={<Button>Teste</Button>}
      />

      <Route
        path='/formulario'
        element={<CadastroEmpresa/>}
      />

      <Route
        path='*'
        element={<Navigate to='/pagina-inicial' />}
      />
    </Routes>
  )
}

export default AppRoutes