import { FormDadosRepresentante } from "./components/FormDadosRepresentante"
import { FormEnderecoRepresentante } from "./components/FormEnderecoRepresentante"
import { useState } from "react"

export const FormRepresentante = ({ onSubmit, proximo }) => {

    const [dadosRepresentante, setDadosRepresentante] = useState({
        cpf: '',
        nome: '',
        nomeSocial: '',
        rg: '',
        ufEmissao: '',
        telefone: '',
        nomeMaeRepresentante: '',
        email: '',
        dataNascimento: ''
    })

    const [enderecoRepresentante, setEnderecoRepresentante] = useState({
        cep: '',
        street: '',
        streetNumber: '',
        complemento: '',
        bairro: '',
        uf: '',
        cidade: ''
    })

    const handleAvancar = () => {
        const dadosCompletos = {
            ...dadosRepresentante,
            ...enderecoRepresentante
        }
        onSubmit(dadosCompletos)
        proximo()
    }

    return (
        <FormDadosRepresentante
            dados={dadosRepresentante}
            setDados={setDadosRepresentante}
            enviar={handleAvancar}
        />
  )
}

