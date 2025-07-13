import { useFormContext, Controller, useWatch } from 'react-hook-form'
import { TextField, Grid, MenuItem } from '@mui/material'
import { maskHandler } from '../../../../../../shared/utils/masks/maskHandler'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'
import React, { useRef, useState, useEffect } from 'react'
import { handleEnterKeyPress } from '../../../../../../shared/hooks/handleEnterKeyPress'
import { maskOnlyNumbers } from '../../../../../../shared/utils/masks/maskOnlyNumbers'
import axios from 'axios'
import { cepValidator } from '../../../../../../shared/utils/validators/cepValidator'

export const FormEnderecoEmpresa = ({ estados, onNextStep }) => {
    const { control, setValue, setError, clearErrors } = useFormContext()

    const TextFieldRefs = useRef({}) 
    
    const getRefs = (nome) => {
        if (!TextFieldRefs.current[nome]) {
          TextFieldRefs.current[nome] = React.createRef()
        }
        return TextFieldRefs.current[nome]
    }

    const cep = useWatch({ control, name: "empresa.endereco.cep" })
    const uf = useWatch({ control, name: "empresa.endereco.uf" })

    const [cidades, setCidades] = useState([])
    const cidadesCache = useRef({})

    useEffect(() => {
        const fetchCidades = async () => {
            if (!uf) return
            if (cidadesCache.current[uf]) {
                setCidades(cidadesCache.current[uf])
                return
            }
            try {
                const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
                const cidadesFiltradas = response.data
                    .map(({ id, nome }) => ({ id, nome }))
                    .sort((a, b) => a.nome.localeCompare(b.nome))
                setCidades(cidadesFiltradas)
                cidadesCache.current[uf] = response.data
            } catch (error) {
                console.error("Erro ao buscar cidades do IBGE", error)
                setCidades([])
            }
        }
        fetchCidades()
    }, [uf])

    useEffect(() => {
        const buscarEnderecoPorCep = async () => {
            const cepLimpo = cep?.replace(/\D/g, "")
            if (cepLimpo?.length === 8) {
                try {
                    const { data } = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`)
                    if (!data.erro) {
                        setValue("empresa.endereco.uf", data.uf)
                        setValue("empresa.endereco.cidade", data.localidade)
                        clearErrors("empresa.endereco.cep")
                        return
                    }
                    if (data.erro === "true") {
                        setError("empresa.endereco.cep", {
                            type: "manual",
                            message: "CEP não encontrado",
                        })
                    }
                } catch (error) {
                    console.error("Erro ao buscar CEP", error)
                }
            }
        }

    buscarEnderecoPorCep()
  }, [cep, setValue, setError, clearErrors])

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                    name="empresa.endereco.cep"
                    control={control}
                    rules={{
                        required: 'CEP é obrigatório',
                        validate: cepValidator
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                            label="CEP"
                            name="cep"
                            fullWidth
                            value={value || ''}
                            onChange={(event) => maskHandler(maskCEP)(event, onChange)}
                            onBlur={onBlur}
                            error={!!error}
                            helperText={error?.message}
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
                    rules={{
                        required: 'Logradouro é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                        label="Logradouro"
                        name="street"
                        fullWidth
                        value={value || ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={!!error}
                        helperText={error?.message}
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
                    rules={{
                        required: 'Número é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                            label="Número"
                            name="streetNumber"
                            fullWidth
                            value={value || ''}
                            onChange={(event) => maskHandler(maskOnlyNumbers, 4)(event, onChange)}
                            onBlur={onBlur}
                            error={!!error}
                            helperText={error?.message}
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
                    rules={{
                        required: 'Bairro é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                            label="Bairro"
                            name="bairro"
                            fullWidth
                            value={value || ''}
                            onChange={onChange}
                            onBlur={onBlur}
                            error={!!error}
                            helperText={error?.message}
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
                    rules={{
                        required: 'Estado é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                            label="Estado"
                            name="uf"
                            fullWidth
                            value={value || ''}
                            onChange={onChange}
                            onBlur={onBlur}
                            error={!!error}
                            helperText={error?.message}
                            inputRef={getRefs("empresa.endereco.uf")}
                            onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.endereco.cidade"])}
                            select
                            slotProps={{
                                select: {
                                    MenuProps: {
                                        PaperProps: {
                                        style: {
                                            maxHeight: 150,
                                        },
                                        },
                                    },
                                },
                            }}
                        >
                            {estados.map((estado) => (
                                <MenuItem key={estado.sigla} value={estado.sigla}>
                                {estado.nome}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                    name="empresa.endereco.cidade"
                    control={control}
                    rules={{
                        required: 'Cidade é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                            disabled={!uf}
                            label="Cidade"
                            name="cidade"
                            fullWidth
                            value={value || ''}
                            onChange={onChange}
                            onBlur={onBlur}
                            error={!!error}
                            helperText={error?.message}
                            inputRef={getRefs("empresa.endereco.cidade")}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                event.preventDefault()
                                onNextStep()
                                }
                            }}
                            select
                            slotProps={{
                                select: {
                                    MenuProps: {
                                        PaperProps: {
                                        style: {
                                            maxHeight: 150,
                                        },
                                        },
                                    },
                                },
                            }}
                        >
                            {cidades.map((cidade) => (
                                <MenuItem key={cidade.id} value={cidade.nome}>
                                {cidade.nome}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}
                />
            </Grid>
        </Grid>
    )
}
