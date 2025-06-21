import { useState } from 'react';
import { FormEmpresa } from './components/FormEmpresa';
import { FormRepresentante } from './components/FormRepresentanteEmpresa';
import { Box, Button, Typography, Paper } from '@mui/material';

export const CadastroEmpresa = () => {
  const [stepAtual, setStepAtual] = useState(0);

  const [dadosEmpresa, setDadosEmpresa] = useState({
    nomeEmpresa: '',
    cnpj: '',
  });

  const [dadosRepresentante, setDadosRepresentante] = useState({
    nomeRepresentante: '',
    telefone: '',
    email: '',
  });

  const proximoStep = () => setStepAtual((prev) => prev + 1);
  const voltarStep = () => setStepAtual((prev) => prev - 1);

  const handleSubmitFinal = () => {
    const dadosCompletos = {
      ...dadosEmpresa,
      ...dadosRepresentante,
    };

    console.log('Enviando dados:', dadosCompletos);

    // Aqui você pode chamar a API
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: '40px auto' }}>
      <Typography variant="h5" gutterBottom>
        Cadastro de Empresa
      </Typography>

      {stepAtual === 0 && (
        <FormEmpresa dados={dadosEmpresa} setDados={setDadosEmpresa} proximo={proximoStep} />
      )}

      {stepAtual === 1 && (
        <FormRepresentante
          dados={dadosRepresentante}
          setDados={setDadosRepresentante}
          voltar={voltarStep}
          enviar={handleSubmitFinal}
        />
      )}
    </Paper>
  );
};