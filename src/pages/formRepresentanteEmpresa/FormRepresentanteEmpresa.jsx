import { useState } from 'react'

export const FormEmpresa = () => {
    const [formRepresentanteEmpresa, setFormRepresentanteEmpresa] = useState({
        cpf: '',
        nome: '',
        nomeSocial: '',
        rg: '',
        ufEmissao: '',
        telefone: '',
        nomeMaeRepresentante: '',
        email: '',
        dataNascimento:'',
        cep: '',
        street: '',
        streetNumber: '',
        complemento: '',
        bairro: '',
        uf: '',
        cidade: ''
    })
}