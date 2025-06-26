import { TextField, Box, Grid } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'

export const FormEnderecoRepresentante = () => {
    const { register } = useFormContext()

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    fullWidth
                    label="CEP"
                    name="cep"
                    {...register("representante.endereco.cep")}
                />
             </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    fullWidth
                    label="Rua"
                    name="street"
                    {...register("representante.endereco.street")}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    fullWidth
                    label="Número"
                    name="streetNumber"
                    {...register("representante.endereco.streetNumber")}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    fullWidth
                    label="Complemento"
                    name="complemento"
                    {...register("representante.endereco.complemento")}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    fullWidth
                    label="Bairro"
                    name="bairro"
                    {...register("representante.endereco.bairro")}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    fullWidth
                    label="Estado"
                    name="uf"
                    {...register("representante.endereco.uf")}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    fullWidth
                    label="Cidade"
                    name="cidade"
                    {...register("representante.endereco.cidade")}
                />
            </Grid>
        </Grid>
    )
}
