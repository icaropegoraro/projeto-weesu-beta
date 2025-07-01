import { useFormContext, Controller } from 'react-hook-form'
import { TextField, Grid } from '@mui/material'
import { maskHandler } from '../../../../../../shared/utils/maskHandler'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'
import { handleEnterKeyPress } from '../../../../../../shared/hooks/handleEnterKeyPress'
import React, { useRef } from 'react'

export const FormEnderecoRepresentante = () => {
    const { control } = useFormContext()

    const TextFieldRefs = useRef({})
    
      const getRefs = (nome) => {
        if (!TextFieldRefs.current[nome]) {
            TextFieldRefs.current[nome] = React.createRef()
        }
        return TextFieldRefs.current[nome]
      }

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
                        onChange={event => maskHandler(maskCEP)(event, onChange)}
                        inputRef={getRefs("representante.endereco.cep")}
                        onKeyDown={event => handleEnterKeyPress(event, TextFieldRefs.current["representante.endereco.street"])}
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
                        inputRef={getRefs("representante.endereco.street")}
                        onKeyDown={event => handleEnterKeyPress(event, TextFieldRefs.current["representante.endereco.streetNumber"])}
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
                        inputRef={getRefs("representante.endereco.streetNumber")}
                        onKeyDown={event => handleEnterKeyPress(event, TextFieldRefs.current["representante.endereco.complemento"])}
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
                        inputRef={getRefs("representante.endereco.complemento")}
                        onKeyDown={event => handleEnterKeyPress(event, TextFieldRefs.current["representante.endereco.bairro"])}
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
                        inputRef={getRefs("representante.endereco.bairro")}
                        onKeyDown={event => handleEnterKeyPress(event, TextFieldRefs.current["representante.endereco.uf"])}
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
                        inputRef={getRefs("representante.endereco.uf")}
                        onKeyDown={event => handleEnterKeyPress(event, TextFieldRefs.current["representante.endereco.cidade"])}
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
                        inputRef={getRefs("representante.endereco.cidade")}
                    />
                    )}
                />
                </Grid>

        </Grid>
    )
}
