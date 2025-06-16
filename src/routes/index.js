import { Routes, Route, Navigate } from "react-router-dom";
import Button from '@mui/material/Button';

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={<Button>Teste</Button>}
      />
      <Route
        path="*"
        element={<Navigate to="/pagina-inicial" />}
      />
    </Routes>
  );
}

export default AppRoutes;