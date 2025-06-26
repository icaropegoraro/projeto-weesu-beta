import { Grid, Typography } from "@mui/material"
import { FormDadosRepresentante } from "./components/FormDadosRepresentante"
import { FormEnderecoRepresentante } from "./components/FormEnderecoRepresentante"

export const FormRepresentante = () => {
    return (
        <Grid container spacing={2}>
            <Typography variant="h5" gutterBottom>Dados do representante</Typography>
            <FormDadosRepresentante />
            <Typography variant="h5" gutterBottom>Endereço do representante</Typography>
            <FormEnderecoRepresentante />
        </Grid>
    )
}