// React
import { useState, useEffect } from 'react'

// React Hook Form
import { useForm, FormProvider } from 'react-hook-form'

// MUI
import { Grid, Button, Stepper, StepButton, Step } from '@mui/material'

// Forms
import { FormRepresentante } from './Form/FormRepresentanteEmpresa/FormRepresentante'
import { FormEmpresa } from './Form/FormEmpresa/FormEmpresa'

// axios
import axios from 'axios'

export const CadastroEmpresa = () => {
  const methods = useForm({
    mode: 'onBlur'
  })

  const [estados, setEstados] = useState([])

  useEffect(() => {
    const fetchEstados = async () => {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        const estadosOrdenados = response.data.sort((a, b) => a.nome.localeCompare(b.nome))
        setEstados(estadosOrdenados)
      } catch (error) {
        console.error('Erro ao buscar estados:', error)
      }
    }

    fetchEstados()
  }, [])

  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => setCurrentStep((current) => current + 1)
  const returnStep = () => setCurrentStep((current) => current - 1)
  const goToStep = (stepNumber) => setCurrentStep(stepNumber)

  const steps = ['Cadastro da empresa', 'Cadastro do representante']
  const stepComponents = [
      <FormEmpresa estados={estados} onNextStep={nextStep}/>,
      <FormRepresentante estados={estados} />
  ]

  const isFirstStep = (currentStep === 0)
  const isLastStep = (currentStep === steps.length - 1)

  const onSubmit = (data) => {
    console.log('Dados enviados:', data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid size={{xs: 12}} marginTop={'10px'}>
            <Stepper 
              activeStep={currentStep} 
              alternativeLabel
              nonLinear
            >
              {steps.map((label, stepNumber) => (
                <Step key={label}>
                  <StepButton onClick={() => goToStep(stepNumber)}>{label}</StepButton>
                </Step>
              ))}
            </Stepper>
          </Grid>
            
          {stepComponents[currentStep]}

          <Grid container size={{xs: 12}} justifyContent={'center'} spacing={2}> 
            <Button 
              variant='outlined' 
              onClick={returnStep} 
              disabled={isFirstStep}
            >
              Voltar
            </Button>

            <Button
              type="button"
              variant="outlined"
              onClick={
                isLastStep
                  ? methods.handleSubmit(onSubmit)
                  : nextStep
              }
            >
              {isLastStep ? 'Finalizar' : 'Próximo'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  )
}