import React from 'react'
import { useState, useCallback } from "react"
import { FormDadosEmpresa } from "./components/FormDadosEmpresa"
import { FormEnderecoEmpresa } from "./components/FormEnderecoEmpresa"
import { Box } from "@mui/system"
import { Button } from '@mui/material'

export const FormEmpresa = ({ onSubmit, proximo }) => {
    const [dadosEmpresa, setDadosEmpresa] = useState({
        cnpj: '',
        razaoSocial: '',
        nomeFantasia: '',
        inscricaoEstadual: '',
        isencaoIE: false,
        email: '',
        telefone: '',
        qtdClientes: '',
        vencimento: '',
        dataAbertura: '',
        cnae: '',
        faturamento: '',
        tipoAtuacao: '',
        regimeTributario: '',
        formatoConstituicao: ''
    })

    const [enderecoEmpresa, setEnderecoEmpresa] = useState({
        cep: '',
        street: '',
        streetNumber: '',
        complemento: '',
        bairro: '',
        uf: '',
        cidade: ''
    })

    const setDadosEmpresaCallback = (newDados) => {
        setDadosEmpresa(prev => ({ ...prev, ...newDados }));
    }

    const setEnderecoEmpresaCallback = (newEndereco) => {
        setEnderecoEmpresa(prev => ({ ...prev, ...newEndereco }));
    }

    const handleAvancar = () => {
        const dadosCompletos = {
            ...dadosEmpresa,
            ...enderecoEmpresa
        }
        onSubmit(dadosCompletos)
        proximo()
    }

    return(
        <Box>
            <FormDadosEmpresa
                dados={dadosEmpresa}
                setDados={setDadosEmpresaCallback} 
            />
            <FormEnderecoEmpresa
                endereco={enderecoEmpresa}
                setEndereco={setEnderecoEmpresaCallback}
            />
            <Button 
                variant="contained" 
                onClick={handleAvancar} 
                sx={{ mt: 2 }}>
                    Próximo
            </Button>
        </Box>
    )
}