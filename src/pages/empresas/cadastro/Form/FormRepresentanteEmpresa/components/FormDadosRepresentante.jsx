import { TextField, Box, Grid } from '@mui/material'
import { maskNumberPhone } from '../../../../../../shared/utils/masks/maskNumberPhone'
import { useFormContext } from 'react-hook-form'

export const FormDadosRepresentante = () => {
  const { register } = useFormContext()

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          fullWidth
          label="CPF"
          name="cpf"
          {...register("representante.cpf")}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Nome"
          name="nome"
          {...register("representante.nome")}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          fullWidth
          label="Nome social"
          name="nomeSocial"
          {...register("representante.nomeSocial")}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="RG"
          name="rg"
          {...register("representante.rg")}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="UF de emissão"
          name="ufEmissao"
          {...register("representante.ufEmissao")}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Telefone"
          name="telefone"
          {...register("representante.telefone")}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Nome da mãe"
          name="nomeMaeRepresentante"
          {...register("representante.nomeMaeRepresentante")}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          {...register("representante.email")}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Data de nascimento"
          name="dataNascimento"
          {...register("representante.dataNascimento")}
        />
      </Grid>
    </Grid>
  )
}