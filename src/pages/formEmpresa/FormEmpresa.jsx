import { useState } from 'react'

export const FormEmpresa = () => {
    const [formEmpresa, setFormEmpresa] = useState({
        cnpj: '',
        razaoSocial: '',
        nomeFantasia: '',
        inscricaoEstadual: '',
        isencao: false,
        email: '',
        telefone: '',
        qtdClientes: '',
        vencimento: '',
        dataAbertura: '',
        cnae: '',
        faturamento: '',
        tipoAtuacao: '',
        regimeTributario: '',
        formatoConstituicao: '',
        cep: '',
        street: '',
        streetNumber: '',
        complemento: '',
        bairro: '',
        uf: '',
        cidade: ''
    })
}