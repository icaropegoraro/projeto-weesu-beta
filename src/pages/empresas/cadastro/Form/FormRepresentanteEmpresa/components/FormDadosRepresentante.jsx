import { TextField, Button, Box } from '@mui/material'
import { maskNumberPhone } from '../../../../../../shared/utils/masks/maskNumberPhone'

export const FormDadosRepresentante = ({ dados, setDados, enviar }) => {
  const handleChange = (e) => {
    const { name, value } = e.target

    setDados({
          ...dados,
          [name]: 
          name === 'telefone' ? maskNumberPhone(value) 
          : value
        })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!dados.nome || !dados.telefone || !dados.email) {
      alert('Preencha todos os campos.')
      return
    }
    enviar()
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>

      <TextField
        fullWidth
        label="CPF"
        name="cpf"
        value={dados.cpf}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Nome"
        name="nome"
        value={dados.nome}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Nome social"
        name="nomeSocial"
        value={dados.nomeSocial}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="RG"
        name="rg"
        value={dados.rg}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="UF de emissão"
        name="ufEmissao"
        value={dados.ufEmissao}
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
        label="Nome da mãe"
        name="nomeMaeRepresentante"
        value={dados.nomeMaeRepresentante}
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
        label="Data de nascimento"
        name="dataNascimento"
        value={dados.dataNascimento}
        onChange={handleChange}
        margin="normal"
      />
    </Box>
  );
};