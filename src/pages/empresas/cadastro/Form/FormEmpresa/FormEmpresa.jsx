// MUI
import { Typography, Grid } from '@mui/material'

// Forms
import { FormDadosEmpresa } from './components/FormDadosEmpresa'
import { FormEnderecoEmpresa } from './components/FormEnderecoEmpresa'

export const FormEmpresa = ({ estados, onNextStep }) => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
                <Typography variant='h5' gutterBottom>Dados da empresa</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
                <FormDadosEmpresa />
            </Grid>
            <Grid size={{ xs: 12 }}>
                <Typography variant='h5' gutterBottom>Endereço da empresa</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
                <FormEnderecoEmpresa estados={estados} onNextStep={onNextStep}/>
            </Grid>
        </Grid>
    )
}