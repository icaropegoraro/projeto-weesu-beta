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

  const onSubmit = (data) => {
    console.log("Dados enviados:", data)
  }

  return (
    <Grid container spacing={2}>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} sx={{ p: 3 }}>
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
            
          {stepComponents[currentStep]}

            <Button 
              variant="outlined" 
              onClick={returnStep} 
              disabled={currentStep === 0}>
              Voltar
            </Button>
            {currentStep === 0 ? (
              <Button 
                variant="outlined" 
                onClick={nextStep}
              >
                Próximo
              </Button>
            ) : (
              <Button 
                variant="outlined" 
                onClick={onSubmit()}
              >
                Finalizar
              </Button>
            )}
          
        </Box>
      </FormProvider>
    </Grid>
  )
}