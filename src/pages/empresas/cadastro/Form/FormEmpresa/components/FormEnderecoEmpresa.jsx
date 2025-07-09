import { useFormContext, Controller, useWatch } from 'react-hook-form'
import { TextField, Grid, MenuItem } from '@mui/material'
import { maskHandler } from '../../../../../../shared/utils/masks/maskHandler'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'
import React, { useRef, useState, useEffect } from 'react'
import { handleEnterKeyPress } from '../../../../../../shared/hooks/handleEnterKeyPress'
import { maskOnlyNumbers } from '../../../../../../shared/utils/masks/maskOnlyNumbers'
import axios from 'axios'

export const FormEnderecoEmpresa = ({ estados, onNextStep }) => {
    const { control, setValue } = useFormContext()

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
                        setValue("empresa.endereco.uf", data.uf)
                        setValue("empresa.endereco.cidade", data.localidade)
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
                            onChange={(event) => maskHandler(maskOnlyNumbers, 4)(event, onChange)}
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
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            disabled={!uf}
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
