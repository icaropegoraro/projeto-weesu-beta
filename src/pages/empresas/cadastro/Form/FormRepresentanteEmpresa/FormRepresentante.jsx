import { Box, Typography } from "@mui/material"
import { FormDadosRepresentante } from "./components/FormDadosRepresentante"
import { FormEnderecoRepresentante } from "./components/FormEnderecoRepresentante"

export const FormRepresentante = () => {
    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h5" gutterBottom>Dados da Empresa</Typography>
            <FormDadosRepresentante />
            <FormEnderecoRepresentante />
        </Box>
    )
}