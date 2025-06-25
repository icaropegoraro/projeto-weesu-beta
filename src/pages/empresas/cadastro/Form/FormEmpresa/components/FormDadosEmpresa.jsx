import { useFormContext } from "react-hook-form"
import { TextField, Box, Grid } from "@mui/material"

export const FormDadosEmpresa = () => {
  const { register } = useFormContext()


  return (
    <Grid container spacing={2}>
      <Grid size={{xs: 12, sm: 6, md: 4, lg: 4}}>
        <TextField
          fullWidth
          label="CNPJ"
          name="cnpj"
          {...register("empresa.cnpj")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Razão Social"
          name="razaoSocial"
          {...register("empresa.razaoSocial")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Nome Fantasia"
          name="nomeFantasia"
          {...register("empresa.nomeFantasia")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Email"
          name="email"
          {...register("empresa.email")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Telefone"
          name="telefone"
          {...register("empresa.telefone")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Quantidade de Clientes"
          name="qtdClientes"
          {...register("empresa.qtdClientes")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Vencimento"
          name="vencimento"
          {...register("empresa.vencimento")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Data de Abertura"
          name="dataAbertura"
          {...register("empresa.dataAbertura")}
        />
      </Grid>

      <Grid>
        <TextField
          label="CNAE"
          name="cnae"
          {...register("empresa.cnae")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Faturamento"
          name="faturamento"
          {...register("empresa.faturamento")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Tipo de Atuação"
          name="tipoAtuacao"
          {...register("empresa.tipoAtuacao")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Regime Tributário"
          name="regimeTributario"
          {...register("empresa.regimeTributario")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Formato de constituição"
          name="formatoConstituicao"
          {...register("empresa.formatoConstituicao")}
        />
      </Grid>
    </Grid>
  )
}