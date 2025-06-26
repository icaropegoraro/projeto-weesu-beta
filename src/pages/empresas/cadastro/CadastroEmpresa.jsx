import { useForm, FormProvider } from 'react-hook-form'
import { useState } from "react"
import { Button, Box, Stepper, StepButton, Step } from "@mui/material"
import { FormRepresentante } from "./Form/FormRepresentanteEmpresa/FormRepresentante"
import { FormEmpresa } from "./Form/FormEmpresa/FormEmpresa"
import { Grid } from '@mui/system'

export const CadastroEmpresa = () => {
  const methods = useForm()

  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => setCurrentStep((current) => current + 1)
  const returnStep = () => setCurrentStep((current) => current - 1)
  const goToStep = (stepNumber) => setCurrentStep(stepNumber)

  const steps = ['Cadastro da empresa', 'Cadastro do representante']
  const stepComponents = [
      <FormEmpresa key="empresa" onNext={nextStep} />,
      <FormRepresentante key="representante" onBack={returnStep} />
    ]

  const isFirstStep = (currentStep === 0)
  const isLastStep = (currentStep === steps.length - 1)

  const onSubmit = (data) => {
    console.log("Dados enviados:", data)
  }

  return (
    <Grid container spacing={2}>
      <FormProvider {...methods}>
        <Grid size={{xs: 12}} gap={'10px'}>
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

        <Button 
          variant="outlined" 
          onClick={returnStep} 
          disabled={isFirstStep}
        >
          Voltar
        </Button>

        <Button 
          variant="outlined" 
          onClick={isLastStep ? methods.handleSubmit(onSubmit) : nextStep}
        >
          {isLastStep ? 'Finalizar' : 'Próximo'}
        </Button>
      </FormProvider>
    </Grid>
  )
}