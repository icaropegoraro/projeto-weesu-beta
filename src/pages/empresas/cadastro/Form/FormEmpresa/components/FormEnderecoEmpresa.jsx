import React from 'react'
import { TextField, Box } from '@mui/material'
import { maskCEP } from '../../../../../../shared/utils/masks/maskCEP'

export const FormEnderecoEmpresa = ({ endereco, setEndereco }) => {
    const handleChange = (event) => {
        const { name, value } = event.target

        setEndereco({
            ...endereco,
            [name]:
            name === 'cep' ? maskCEP(value) 
            : value
        })
    }

    return (
        <Box>
            <TextField
                fullWidth
                label="CEP"
                name="cep"
                value={endereco.cep}
                onChange={handleChange}
                margin="normal"
            />

            <TextField
                fullWidth
                label="Rua"
                name="street"
                value={endereco.street}
                onChange={handleChange}
                margin="normal"
            />

            <TextField
                fullWidth
                label="Número"
                name="streetNumber"
                value={endereco.streetNumber}
                onChange={handleChange}
                margin="normal"
            />

            <TextField
                fullWidth
                label="Complemento"
                name="complemento"
                value={endereco.complemento}
                onChange={handleChange}
                margin="normal"
            />

            <TextField
                fullWidth
                label="Bairro"
                name="bairro"
                value={endereco.bairro}
                onChange={handleChange}
                margin="normal"
            />

            <TextField
                fullWidth
                label="Estado"
                name="uf"
                value={endereco.uf}
                onChange={handleChange}
                margin="normal"
            />

            <TextField
                fullWidth
                label="Cidade"
                name="cidade"
                value={endereco.cidade}
                onChange={handleChange}
                margin="normal"
            />
        </Box>
    )
}
