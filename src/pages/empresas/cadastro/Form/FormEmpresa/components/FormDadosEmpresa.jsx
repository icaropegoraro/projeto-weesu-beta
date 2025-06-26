import { useFormContext } from "react-hook-form"
import { TextField, Box, Grid } from "@mui/material"

export const FormDadosEmpresa = () => {
  const { register } = useFormContext()


  return (
    <Grid container spacing={2}>
      <Grid size={{xs: 12, md: 3}}>
        <TextField
          fullWidth
          label="CNPJ"
          name="cnpj"
          {...register("empresa.dados.cnpj")}
        />
      </Grid>

      <Grid size={{xs: 12, md: 6}}>
        <TextField
          fullWidth
          label="Razão Social"
          name="razaoSocial"
          {...register("empresa.dados.razaoSocial")}
        />
      </Grid>

      <Grid size={{xs: 12, md: 3}}>
        <TextField
          fullWidth
          label="Nome Fantasia"
          name="nomeFantasia"
          {...register("empresa.dados.nomeFantasia")}
        />
      </Grid>

      <Grid size={{xs: 12, md: 3}}>
        <TextField
          fullWidth
          label="Inscrição Estadual"
          name="inscricaoEstadual"
          {...register("empresa.dados.inscricaoEstadual")}
        />
      </Grid>

      <Grid size={{xs: 12, md: 6}}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          {...register("empresa.dados.email")}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <TextField
          fullWidth
          label="Telefone"
          name="telefone"
          {...register("empresa.dados.telefone")}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <TextField
          fullWidth
          label="Quantidade de Clientes"
          name="qtdClientes"
          {...register("empresa.dados.qtdClientes")}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <TextField
          fullWidth
          label="Vencimento"
          name="vencimento"
          {...register("empresa.dados.vencimento")}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <TextField
          fullWidth
          label="Data de Abertura"
          name="dataAbertura"
          {...register("empresa.dados.dataAbertura")}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <TextField
          fullWidth
          label="CNAE"
          name="cnae"
          {...register("empresa.dados.cnae")}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <TextField
          fullWidth
          label="Faturamento"
          name="faturamento"
          {...register("empresa.dados.faturamento")}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <TextField
          fullWidth
          label="Tipo de Atuação"
          name="tipoAtuacao"
          {...register("empresa.dados.tipoAtuacao")}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <TextField
          fullWidth
          label="Regime Tributário"
          name="regimeTributario"
          {...register("empresa.dados.regimeTributario")}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <TextField
          fullWidth
          label="Formato de constituição"
          name="formatoConstituicao"
          {...register("empresa.dados.formatoConstituicao")}
        />
      </Grid>

    </Grid>
  )
}