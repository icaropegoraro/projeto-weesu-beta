import { TextField, Grid } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'
import { maskHandler } from '../../../../../../shared/utils/maskHandler'

export const FormEnderecoRepresentante = () => {
    const { control } = useFormContext()

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                name="representante.endereco.cep"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField
                    fullWidth
                    label="CEP"
                    name="cep"
                    value={value || ''}
                    onChange={(event) => maskHandler(maskCEP)(event, onChange)}
                    />
                )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                name="representante.endereco.street"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField
                    fullWidth
                    label="Rua"
                    name="street"
                    value={value || ''}
                    onChange={onChange}
                    />
                )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                name="representante.endereco.streetNumber"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField
                    fullWidth
                    label="Número"
                    name="streetNumber"
                    value={value || ''}
                    onChange={onChange}
                    />
                )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                name="representante.endereco.complemento"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField
                    fullWidth
                    label="Complemento"
                    name="complemento"
                    value={value || ''}
                    onChange={onChange}
                    />
                )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                name="representante.endereco.bairro"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField
                    fullWidth
                    label="Bairro"
                    name="bairro"
                    value={value || ''}
                    onChange={onChange}
                    />
                )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                name="representante.endereco.uf"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField
                    fullWidth
                    label="Estado"
                    name="uf"
                    value={value || ''}
                    onChange={onChange}
                    />
                )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                name="representante.endereco.cidade"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField
                    fullWidth
                    label="Cidade"
                    name="cidade"
                    value={value || ''}
                    onChange={onChange}
                    />
                )}
                />
            </Grid>
        </Grid>

    )
}
