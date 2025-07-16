// MUI
import { Grid, Typography } from '@mui/material'

// Forms
import { FormDadosRepresentante } from './components/FormDadosRepresentante'
import { FormEnderecoRepresentante } from './components/FormEnderecoRepresentante'

export const FormRepresentante = ({estados}) => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
                <Typography variant='h5' gutterBottom>Dados do representante</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
                <FormDadosRepresentante />
            </Grid>
            <Grid size={{ xs: 12 }}>
                <Typography variant='h5' gutterBottom>Endereço do representante</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
                <FormEnderecoRepresentante estados={estados}/>
            </Grid>
        </Grid>
    )
}