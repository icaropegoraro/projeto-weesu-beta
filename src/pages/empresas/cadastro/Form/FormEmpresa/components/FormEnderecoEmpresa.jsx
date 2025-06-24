import React from 'react'
import { TextField, Box } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'

export const FormEnderecoEmpresa = ({ endereco, setEndereco }) => {
    const { register } = useFormContext()

    return (
        <Box>
            <TextField
                label="CEP"
                name="cep"
                {...register("empresa.cep")}
            />

            <TextField
                label="Rua"
                name="street"
                {...register("empresa.street")}
            />

            <TextField
                label="Número"
                name="streetNumber"
                {...register("empresa.streetNumber")}
            />

            <TextField
                label="Complemento"
                name="complemento"
                {...register("empresa.complemento")}
            />

            <TextField
                label="Bairro"
                name="bairro"
                {...register("empresa.bairro")}
            />

            <TextField
                label="Estado"
                name="uf"
                {...register("empresa.uf")}
            />

            <TextField
                label="Cidade"
                name="cidade"
                {...register("empresa.cidade")}
            />
        </Box>
    )
}
