import { TextField, Button, Box } from '@mui/material';
import { maskCNPJ } from '../../../../shared/utils/masks/maskCNPJ'; // cria o arquivo e exporta a função

export const FormEmpresa = ({ dados, setDados, proximo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'cnpj') {
      setDados({
        ...dados,
        cnpj: maskCNPJ(value),
      });
    } else {
      setDados({
        ...dados,
        [name]: value,
      });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!dados.nomeEmpresa || !dados.cnpj) {
      alert('Preencha todos os campos.');
      return;
    }
    proximo();
  };

  return (
    <Box component="form" onSubmit={handleNext}>
      <TextField
        fullWidth
        label="Nome da empresa"
        name="nomeEmpresa"
        value={dados.nomeEmpresa}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="CNPJ"
        name="cnpj"
        value={dados.cnpj}
        onChange={handleChange}
        margin="normal"
      />
      <Button variant="contained" type="submit" sx={{ mt: 2 }}>
        Próximo
      </Button>
    </Box>
  );
};