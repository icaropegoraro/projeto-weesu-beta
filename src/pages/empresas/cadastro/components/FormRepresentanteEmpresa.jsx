import { TextField, Button, Box } from '@mui/material';
import { maskNumberPhone } from '../../../../shared/utils/masks/maskNumberPhone'

export const FormRepresentante = ({ dados, setDados, voltar, enviar }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'telefone') {
      setDados({
        ...dados,
        telefone: maskNumberPhone(value),
      });
    } else {
      setDados({
        ...dados,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dados.nomeRepresentante || !dados.telefone || !dados.email) {
      alert('Preencha todos os campos.');
      return;
    }
    enviar();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Nome do representante"
        name="nomeRepresentante"
        value={dados.nomeRepresentante}
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
        label="Email"
        name="email"
        value={dados.email}
        onChange={handleChange}
        margin="normal"
      />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button variant="outlined" onClick={voltar}>
          Voltar
        </Button>
        <Button variant="contained" type="submit">
          Finalizar
        </Button>
      </Box>
    </Box>
  );
};