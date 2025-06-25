import { useForm, FormProvider } from 'react-hook-form'
import { useState } from "react"
import { Button, Box, Stepper, StepButton, Step } from "@mui/material"
import { FormRepresentante } from "./Form/FormRepresentanteEmpresa/FormRepresentante"
import { FormEmpresa } from "./Form/FormEmpresa/FormEmpresa"

export const CadastroEmpresa = () => {
  const methods = useForm()

  const [currentStep, setCurrentStep] = useState(0)

  const steps = ['Cadastro da empresa', 'Cadastro do representante']

  const nextStep = () => setCurrentStep((current) => current + 1)
  const returnStep = () => setCurrentStep((current) => current - 1)

  const stepAnterior = currentStep - 1

  const onSubmit = (data) => {
    console.log("Dados enviados:", data)
  }

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} sx={{ p: 3 }}>
        <Stepper 
          activeStep={currentStep} 
          alternativeLabel
          nonLinear
        >

          {steps.map((label, index) => (
          <Step 
            key={label}
          >
            <StepButton>{label}</StepButton>
          </Step>
          ))}

        </Stepper>
          {currentStep === 0 && (
            <FormEmpresa />
          )}

          {currentStep === 1 && (
            <FormRepresentante />
          )}

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
  )
}