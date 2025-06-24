import { useFormContext } from "react-hook-form"
import { TextField, Box } from "@mui/material"

export const FormDadosEmpresa = () => {
  const { register } = useFormContext()


  return (
    <Box>
      <TextField
        label="CNPJ"
        name="cnpj"
        {...register("empresa.cnpj")}
      />

      <TextField
        label="Razão Social"
        name="razaoSocial"
        {...register("empresa.razaoSocial")}
      />

      <TextField
        label="Nome Fantasia"
        name="nomeFantasia"
        {...register("empresa.nomeFantasia")}

      />
      
      <TextField
        label="Email"
        name="email"
        {...register("empresa.email")}
      />

      <TextField
        label="Telefone"
        name="telefone"
        {...register("empresa.telefone")}
      />

      <TextField
        label="Quantidade de Clientes"
        name="qtdClientes"
        {...register("empresa.qtdClientes")}
      />

      <TextField
        label="Vencimento"
        name="vencimento"
        {...register("empresa.vencimento")}
      />

      <TextField
        label="Data de Abertura"
        name="dataAbertura"
        {...register("empresa.dataAbertura")}
      />

      <TextField
        label="CNAE"
        name="cnae"
        {...register("empresa.cnae")}
      />

      <TextField
        label="Faturamento"
        name="faturamento"
        {...register("empresa.faturamento")}
      />

      <TextField
        label="Tipo de Atuação"
        name="tipoAtuacao"
        {...register("empresa.tipoAtuacao")}
      />

      <TextField
        label="Regime Tributário"
        name="regimeTributario"
        {...register("empresa.regimeTributario")}
      />

      <TextField
        label="Formato de constituição"
        name="formatoConstituicao"
        {...register("empresa.formatoConstituicao")}
      />
    </Box>
  )
}