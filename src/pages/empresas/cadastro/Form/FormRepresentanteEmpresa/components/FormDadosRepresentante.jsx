import { TextField, Grid } from '@mui/material'
import { maskCPF } from '../../../../../../shared/utils/masks/maskCPF'
import { maskRG } from '../../../../../../shared/utils/masks/maskRG'
import { maskNumberPhone } from '../../../../../../shared/utils/masks/maskNumberPhone'
import { useFormContext, Controller } from 'react-hook-form'
import { maskHandler } from '../../../../../../shared/utils/maskHandler'

export const FormDadosRepresentante = () => {
  const { control } = useFormContext()

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="representante.dados.nome"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Nome"
              name="nome"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="representante.dados.nomeSocial"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Nome social"
              name="nomeSocial"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="representante.dados.rg"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="RG"
              name="rg"
              value={value || ''}
              onChange={(event) => maskHandler(maskRG)(event, onChange)}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="representante.dados.cpf"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="CPF"
              name="cpf"
              value={value || ''}
              onChange={(event) => maskHandler(maskCPF)(event, onChange)}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="representante.dados.dataNascimento"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Data de nascimento"
              name="dataNascimento"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="representante.dados.nomeMaeRepresentante"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Nome da mãe"
              name="nomeMaeRepresentante"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="representante.dados.ufEmissao"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="UF de emissão"
              name="ufEmissao"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="representante.dados.email"
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

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="representante.dados.telefone"
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
    </Grid>

  )
}