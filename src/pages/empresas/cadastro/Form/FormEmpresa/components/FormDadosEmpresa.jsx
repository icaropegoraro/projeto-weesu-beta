import { useFormContext, Controller } from "react-hook-form"
import { TextField, Grid } from "@mui/material"
import { maskHandler } from "../../../../../../shared/utils/maskHandler"
import { maskCNPJ } from "../../../../../../shared/utils/masks/maskCNPJ"
import { maskNumberPhone } from "../../../../../../shared/utils/masks/maskNumberPhone"
import { maskCNAE } from "../../../../../../shared/utils/masks/maskCNAE"

export const FormDadosEmpresa = () => {
  const { control } = useFormContext()

  return (
    <Grid container spacing={2}> 
      <Grid size={{xs: 12, md: 3}}>
        <Controller
          name="empresa.dados.cnpj"
          control={control}
          render={({ field: { onChange, value }}) => (
            <TextField
              fullWidth
              label="CNPJ"
              name="cnpj"
              value={value || ''}
              onChange={(event) => maskHandler(maskCNPJ)(event, onChange)}
            />
          )}
        />
      </Grid>

      <Grid size={{xs: 12, md: 6}}>
        <Controller
          name="empresa.dados.razaoSocial"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Razão Social"
              name="razaoSocial"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{xs: 12, md: 3}}>
        <Controller
          name="empresa.dados.nomeFantasia"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Nome Fantasia"
              name="nomeFantasia"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{xs: 12, md: 3}}>
        <Controller
          name="empresa.dados.inscricaoEstadual"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Inscrição Estadual"
              name="inscricaoEstadual"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{xs: 12, md: 6}}>
        <Controller
          name="empresa.dados.email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <Controller
          name="empresa.dados.telefone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Telefone"
              name="telefone"
              value={value || ''}
              onChange={(event) => maskHandler(maskNumberPhone)(event, onChange)}
            />
          )}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <Controller
          name="empresa.dados.qtdClientes"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Quantidade de Clientes"
              name="qtdClientes"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <Controller
          name="empresa.dados.vencimento"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Vencimento"
              name="vencimento"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <Controller
          name="empresa.dados.dataAbertura"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Data de Abertura"
              name="dataAbertura"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <Controller
          name="empresa.dados.cnae"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="CNAE"
              name="cnae"
              value={value || ''}
              onChange={(event) => maskHandler(maskCNAE)(event, onChange)}
            />
          )}
        />
      </Grid>
      <Grid size={{xs:12, md:3}}>
        <Controller
          name="empresa.dados.faturamento"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Faturamento"
              name="faturamento"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <Controller
          name="empresa.dados.tipoAtuacao"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Tipo de Atuação"
              name="tipoAtuacao"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <Controller
          name="empresa.dados.tipoAtuacao"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Tipo de Atuação"
              name="tipoAtuacao"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />

      </Grid>

      <Grid size={{xs:12, md:3}}>
        <Controller
          name="empresa.dados.formatoConstituicao"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Formato de constituição"
              name="formatoConstituicao"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

    </Grid>
  )
}