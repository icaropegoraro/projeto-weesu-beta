import { Box, Typography, Grid } from "@mui/material"
import { FormDadosEmpresa } from "./components/FormDadosEmpresa"
import { FormEnderecoEmpresa } from "./components/FormEnderecoEmpresa"

export const FormEmpresa = () => {
    return (
        <Grid container spacing={2}>
            <Typography variant="h5" gutterBottom>Dados da Empresa</Typography>
            <FormDadosEmpresa />
            <Typography variant="h5" gutterBottom>Dados da Empresa</Typography>
            <FormEnderecoEmpresa />
        </Grid>
    )
}