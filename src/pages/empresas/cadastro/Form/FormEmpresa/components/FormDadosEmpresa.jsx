import React from 'react'
import { useCallback } from 'react'
import { TextField, Box } from '@mui/material';
import { maskCNPJ } from '../../../../../../shared/utils/masks/maskCNPJ'; // cria o arquivo e exporta a função

export const FormDadosEmpresa = React.memo(({ dados, setDados, proximo }) => {
  const handleChange = useCallback((event) => {
    const { name, value } = event.target

    setDados(prevDados => ({
      ...prevDados,
      [name]: name === 'cnpj' ? maskCNPJ(value) : value,
    }))
  }, [setDados])


  return (
    <Box>
      
      <TextField
        fullWidth
        label="CNPJ"
        name="cnpj"
        value={dados.cnpj}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Razão Social"
        name="razaoSocial"
        value={dados.razaoSocial}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Nome Fantasia"
        name="nomeFantasia"
        value={dados.nomeFantasia}
        onChange={handleChange}
        margin="normal"
      />
      
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={dados.email}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Telefone"
        name="telefone"
        value={dados.telefone}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Quantidade de Clientes"
        name="qtdClientes"
        value={dados.qtdClientes}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Vencimento"
        name="vencimento"
        value={dados.vencimento}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Data de Abertura"
        name="dataAbertura"
        value={dados.dataAbertura}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="CNAE"
        name="cnae"
        value={dados.cnae}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Faturamento"
        name="faturamento"
        value={dados.faturamento}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Tipo de Atuação"
        name="tipoAtuacao"
        value={dados.tipoAtuacao}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Regime Tributário"
        name="regimeTributario"
        value={dados.regimeTributario}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Formato de constituição"
        name="formatoConstituicao"
        value={dados.formatoConstituicao}
        onChange={handleChange}
        margin="normal"
      />
    </Box>
  )
})