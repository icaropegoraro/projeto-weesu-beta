import React from 'react'
import { TextField, Box } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'

export const FormEnderecoRepresentante = () => {
    const { register } = useFormContext()

    return (
        <Box>
            <TextField
                label="CEP"
                name="cep"
                {...register("representante.cep")}
            />

            <TextField
                label="Rua"
                name="street"
                {...register("representante.street")}
            />

            <TextField
                label="Número"
                name="streetNumber"
                {...register("representante.streetNumber")}
            />

            <TextField
                label="Complemento"
                name="complemento"
                {...register("representante.complemento")}
            />

            <TextField
                label="Bairro"
                name="bairro"
                {...register("representante.bairro")}
            />

            <TextField
                label="Estado"
                name="uf"
                {...register("representante.uf")}
            />

            <TextField
                label="Cidade"
                name="cidade"
                {...register("representante.cidade")}
            />
        </Box>
    )
}
