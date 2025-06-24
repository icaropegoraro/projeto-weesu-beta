import { Box, Typography } from "@mui/material"
import { FormDadosEmpresa } from "./components/FormDadosEmpresa"
import { FormEnderecoEmpresa } from "./components/FormEnderecoEmpresa"

export const FormEmpresa = () => {
    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h5" gutterBottom>Dados da Empresa</Typography>
            <FormDadosEmpresa />
            <FormEnderecoEmpresa />
        </Box>
    )
}