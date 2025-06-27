import { useFormContext, Controller } from 'react-hook-form'
import { TextField, Grid } from '@mui/material'
import { maskHandler } from '../../../../../../shared/utils/maskHandler'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'

export const FormEnderecoEmpresa = () => {
    const { control } = useFormContext()

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                    name="empresa.endereco.cep"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                        label="CEP"
                        name="cep"
                        fullWidth
                        value={value || ''}
                        onChange={(event) => maskHandler(maskCEP)(event, onChange)}
                        />
                    )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                    name="empresa.endereco.street"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                        label="Rua"
                        name="street"
                        fullWidth
                        value={value || ''}
                        onChange={onChange}
                        />
                )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                    name="empresa.endereco.streetNumber"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Número"
                            name="streetNumber"
                            fullWidth
                            value={value || ''}
                            onChange={onChange}
                        />
                    )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                    name="empresa.endereco.complemento"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Complemento"
                            name="complemento"
                            fullWidth
                            value={value || ''}
                            onChange={onChange}
                        />
                )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                    name="empresa.endereco.bairro"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Bairro"
                            name="bairro"
                            fullWidth
                            value={value || ''}
                            onChange={onChange}
                        />
                    )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                    name="empresa.endereco.uf"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Estado"
                            name="uf"
                            fullWidth
                            value={value || ''}
                            onChange={onChange}
                        />
                    )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                    name="empresa.endereco.cidade"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Cidade"
                            name="cidade"
                            fullWidth
                            value={value || ''}
                            onChange={onChange}
                        />
                    )}
                />
            </Grid>
            </Grid>
    )
}
