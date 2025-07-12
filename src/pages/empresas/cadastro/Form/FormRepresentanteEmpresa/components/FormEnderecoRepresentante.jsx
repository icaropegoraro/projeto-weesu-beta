import { useFormContext, Controller, useWatch } from 'react-hook-form'
import { TextField, Grid, MenuItem } from '@mui/material'
import { maskHandler } from '../../../../../../shared/utils/masks/maskHandler'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'
import { maskOnlyNumbers } from '../../../../../../shared/utils/masks/maskOnlyNumbers'
import { handleEnterKeyPress } from '../../../../../../shared/hooks/handleEnterKeyPress'
import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'

export const FormEnderecoRepresentante = ({estados}) => {
    const { control, setValue } = useFormContext()

    const TextFieldRefs = useRef({})
    
        const getRefs = (nome) => {
            if (!TextFieldRefs.current[nome]) {
                TextFieldRefs.current[nome] = React.createRef()
            }
            return TextFieldRefs.current[nome]
        }

    const cep = useWatch({ control, name: "representante.endereco.cep" })
    const uf = useWatch({ control, name: "representante.endereco.uf" })

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
                        setValue("representante.endereco.uf", data.uf)
                        setValue("representante.endereco.cidade", data.localidade)
                    }
                } catch (error) {
                    console.error("Erro ao buscar CEP", error)
                }
            }
        }

    buscarEnderecoPorCep()
  }, [cep, setValue])

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                    name="representante.endereco.cep"
                    control={control}
                    rules={{
                        required: 'CEP é obrigatório'
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                            fullWidth
                            label="CEP"
                            name="cep"
                            value={value || ''}
                            onChange={event => maskHandler(maskCEP)(event, onChange)}
                            onBlur={onBlur}
                            error={!!error}
                            helperText={error?.message}
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
                    rules={{
                        required: 'Logradouro é obrigatório'
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                            fullWidth
                            label="Logradouro"
                            name="street"
                            value={value || ''}
                            onChange={onChange}
                            onBlur={onBlur}
                            error={!!error}
                            helperText={error?.message}
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
                    rules={{
                        required: 'Número é obrigatório'
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                            fullWidth
                            label="Número"
                            name="streetNumber"
                            value={value || ''}
                            onChange={(event) => maskHandler(maskOnlyNumbers, 4)(event, onChange)}
                            onBlur={onBlur}
                            error={!!error}
                            helperText={error?.message}
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
                    rules={{
                        required: 'Bairro é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                            fullWidth
                            label="Bairro"
                            name="bairro"
                            value={value || ''}
                            onChange={onChange}
                            onBlur={onBlur}
                            error={!!error}
                            helperText={error?.message}
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
                    rules={{
                        required: 'Estado é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                            fullWidth
                            label="Estado"
                            name="uf"
                            value={value || ''}
                            onChange={onChange}
                            onBlur={onBlur}
                            error={!!error}
                            helperText={error?.message}
                            inputRef={getRefs("representante.endereco.uf")}
                            onKeyDown={event => handleEnterKeyPress(event, TextFieldRefs.current["representante.endereco.cidade"])}
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
                    name="representante.endereco.cidade"
                    control={control}
                    rules={{
                        required: 'Cidade é obrigatório',
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <TextField
                            disabled={!uf}
                            fullWidth
                            label="Cidade"
                            name="cidade"
                            value={value || ''}
                            onChange={onChange}
                            onBlur={onBlur}
                            error={!!error}
                            helperText={error?.message}
                            inputRef={getRefs("representante.endereco.cidade")}
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
