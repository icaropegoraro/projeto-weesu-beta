import { TextField, Box, Grid } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'

export const FormEnderecoRepresentante = () => {
    const { register } = useFormContext()

    return (
        <Box>
            <Grid>
                <TextField
                label="CEP"
                name="cep"
                {...register("representante.cep")}
                />
            </Grid>

            <Grid>
                <TextField
                label="Rua"
                name="street"
                {...register("representante.street")}
                />
            </Grid>

            <Grid>
                <TextField
                label="Número"
                name="streetNumber"
                {...register("representante.streetNumber")}
                />
            </Grid>

            <Grid>
                <TextField
                label="Complemento"
                name="complemento"
                {...register("representante.complemento")}
                />
            </Grid>

            <Grid>
                <TextField
                label="Bairro"
                name="bairro"
                {...register("representante.bairro")}
                />
            </Grid>

            <Grid>
                <TextField
                label="Estado"
                name="uf"
                {...register("representante.uf")}
                />
            </Grid>

            <Grid>
                <TextField
                label="Cidade"
                name="cidade"
                {...register("representante.cidade")}
                />
            </Grid>
        </Box>
    )
}
