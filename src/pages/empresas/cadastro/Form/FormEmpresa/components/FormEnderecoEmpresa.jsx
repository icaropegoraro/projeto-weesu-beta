import { useFormContext, Controller } from 'react-hook-form'
import { TextField, Grid } from '@mui/material'
import { maskHandler } from '../../../../../../shared/utils/maskHandler'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'
import React, { useRef } from 'react'
import { handleEnterKeyPress } from '../../../../../../shared/hooks/handleEnterKeyPress'

export const FormEnderecoEmpresa = ({ onNextStep }) => {
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
                    name="empresa.endereco.cep"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="CEP"
                            name="cep"
                            fullWidth
                            value={value || ''}
                            onChange={(event) => maskHandler(maskCEP)(event, onChange)}
                            inputRef={getRefs("empresa.endereco.cep")}
                            onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.endereco.street"])}
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
                        inputRef={getRefs("empresa.endereco.street")}
                        onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.endereco.streetNumber"])}
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
                            inputRef={getRefs("empresa.endereco.streetNumber")}
                            onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.endereco.complemento"])}
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
                            inputRef={getRefs("empresa.endereco.complemento")}
                            onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.endereco.bairro"])}
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
                            inputRef={getRefs("empresa.endereco.bairro")}
                            onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.endereco.uf"])}
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
                            inputRef={getRefs("empresa.endereco.uf")}
                            onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.endereco.cidade"])}
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
                            inputRef={getRefs("empresa.endereco.cidade")}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                event.preventDefault()
                                onNextStep()
                                }
                            }}
                        />
                    )}
                />
            </Grid>
        </Grid>
    )
}
