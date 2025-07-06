import { Typography, Grid } from "@mui/material"
import { FormDadosEmpresa } from "./components/FormDadosEmpresa"
import { FormEnderecoEmpresa } from "./components/FormEnderecoEmpresa"

export const FormEmpresa = ({ onNextStep }) => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
                <Typography variant="h5" gutterBottom>Dados da Empresa</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
                <FormDadosEmpresa />
            </Grid>
            <Grid size={{ xs: 12 }}>
                <Typography variant="h5" gutterBottom>Endereço da Empresa</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
                <FormEnderecoEmpresa onNextStep={onNextStep}/>
            </Grid>
        </Grid>
    )
}