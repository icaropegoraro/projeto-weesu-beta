import { useFormContext, Controller, useWatch } from 'react-hook-form'
import { TextField, Grid, MenuItem } from '@mui/material'
import { maskHandler } from '../../../../../../shared/utils/masks/maskHandler'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'
import { maskOnlyNumbers } from '../../../../../../shared/utils/masks/maskOnlyNumbers'
import { handleEnterKeyPress } from '../../../../../../shared/hooks/handleEnterKeyPress'
import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'

export const FormEnderecoRepresentante = () => {
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

    const [estados, setEstados] = useState([])
    const [cidades, setCidades] = useState([])

    useEffect(() => {
        const fetchEstados = async () => {
            try {
                const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
                const estadosOrdenados = response.data.sort((a, b) => a.nome.localeCompare(b.nome))
                setEstados(estadosOrdenados)
            } catch (error) {
                console.error("Erro ao buscar estados do IBGE", error)
            }
        }
        fetchEstados()
    }, [])

    useEffect(() => {
        const fetchCidades = async () => {
            if (!uf) return
            try {
                const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
                const cidadesOrdenadas = response.data.map((c) => c.nome).sort((a, b) => a.localeCompare(b))
                setCidades(cidadesOrdenadas)
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
                            onChange={(event) => maskHandler(maskOnlyNumbers, 4)(event, onChange)}
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
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            fullWidth
                            label="Cidade"
                            name="cidade"
                            value={value || ''}
                            onChange={onChange}
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
                                <MenuItem key={cidade} value={cidade}>
                                    {cidade}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}
                />
            </Grid>

        </Grid>
    )
}
