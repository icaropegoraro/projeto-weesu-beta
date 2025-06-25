import { TextField, Box, Grid } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'

export const FormEnderecoEmpresa = () => {
    const { register } = useFormContext()

    return (
        <Box>
            <Grid>
                <TextField
                    label="CEP"
                    name="cep"
                    {...register("empresa.cep")}
                />
            </Grid>

            <Grid>
                <TextField
                    label="Rua"
                    name="street"
                    {...register("empresa.street")}
                />
            </Grid>

            <Grid>
                <TextField
                    label="Número"
                    name="streetNumber"
                    {...register("empresa.streetNumber")}
                />
            </Grid>

            <Grid>
                <TextField
                    label="Complemento"
                    name="complemento"
                    {...register("empresa.complemento")}
                />
            </Grid>

            <Grid>
                <TextField
                    label="Bairro"
                    name="bairro"
                    {...register("empresa.bairro")}
                />
            </Grid>

            <Grid>
                <TextField
                    label="Estado"
                    name="uf"
                    {...register("empresa.uf")}
                />
            </Grid>

            <Grid>
                <TextField
                    label="Cidade"
                    name="cidade"
                    {...register("empresa.cidade")}
                />
            </Grid>
        </Box>
    )
}
