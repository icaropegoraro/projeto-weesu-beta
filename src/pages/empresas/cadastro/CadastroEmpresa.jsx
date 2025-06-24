import { useForm, FormProvider } from "react-hook-form"
import { useState } from "react"
import { Button, Box } from "@mui/material"
import { FormRepresentante } from "./Form/FormRepresentanteEmpresa/FormRepresentante"
import { FormEmpresa } from "./Form/FormEmpresa/FormEmpresa"

export const CadastroEmpresa = () => {
  const methods = useForm()

  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => setCurrentStep((prev) => prev + 1)
  const returnStep = () => setCurrentStep((prev) => prev - 1)

  const onSubmit = (data) => {
    console.log("Dados enviados:", data)
  }

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} sx={{ p: 3 }}>
        {currentStep === 0 && (
          <FormEmpresa />
        )}

        {currentStep === 0 && (
          <Button onClick={nextStep}>Próximo</Button>
        )}

        {currentStep === 1 && (
          <FormRepresentante />
        )}

        {currentStep > 0 && (
          <Box display="flex" justifyContent="flex-start" mt={2}>
            <Button variant="outlined" onClick={returnStep}>
              Voltar
            </Button>
          </Box>
        )}
      </Box>
    </FormProvider>
  )
}