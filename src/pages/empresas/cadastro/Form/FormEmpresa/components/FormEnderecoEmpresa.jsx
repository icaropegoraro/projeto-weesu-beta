import { TextField, Box, Grid } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'

export const FormEnderecoEmpresa = () => {
    const { register } = useFormContext()

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    label="CEP"
                    name="cep"
                    fullWidth
                    {...register("empresa.cep")}
                />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    label="Rua"
                    name="street"
                    fullWidth
                    {...register("empresa.street")}
                />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    label="Número"
                    name="streetNumber"
                    fullWidth
                    {...register("empresa.streetNumber")}
                />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    label="Complemento"
                    name="complemento"
                    fullWidth
                    {...register("empresa.complemento")}
                />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    label="Bairro"
                    name="bairro"
                    fullWidth
                    {...register("empresa.bairro")}
                />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    label="Estado"
                    name="uf"
                    fullWidth
                    {...register("empresa.uf")}
                />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    label="Cidade"
                    name="cidade"
                    fullWidth
                    {...register("empresa.cidade")}
                />
                </Grid>
        </Grid>
    )
}
