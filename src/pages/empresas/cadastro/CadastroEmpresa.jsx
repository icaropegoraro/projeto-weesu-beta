import React, { useCallback, useState } from 'react';
import { FormEmpresa } from './Form/FormEmpresa/FormEmpresa';
import { Typography, Paper, Button, Box } from '@mui/material';
import { FormRepresentante } from './Form/FormRepresentanteEmpresa/FormRepresentante';

export const CadastroEmpresa = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const [empresa, setEmpresa] = useState({})
  const [representante, setRepresentante] = useState ({})

  const nextStep = () => setCurrentStep((prev) => prev + 1)
  const returnStep = () => setCurrentStep((prev) => prev - 1)

  const handleSetEmpresa = (dados) => {
    setEmpresa(dados)
  }

  const handleSetRepresentante = (dados) => {
    setRepresentante(dados)
  }

  const handleSubmit = () => {
    console.log('Enviando dados:', {empresa, representante})
  }

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: '40px auto' }}>
      <Typography variant="h5" gutterBottom>
        Cadastro de Empresa
      </Typography>

      {currentStep === 0 && (
        <FormEmpresa 
          onSubmit={handleSetEmpresa}
          proximo={nextStep}
        />
      )}

      {currentStep === 1 && (
        <FormRepresentante
          onSubmit={handleSetRepresentante}
          proximo={handleSubmit}
        />
      )}

      {currentStep > 0 && (
        <Box display="flex" justifyContent="flex-start" mt={2}>
          <Button variant="outlined" onClick={returnStep}>
            Voltar
          </Button>
        </Box>
      )}
    </Paper>
  )
}