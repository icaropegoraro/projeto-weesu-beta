import { TextField, Box, Grid } from '@mui/material'
import { maskNumberPhone } from '../../../../../../shared/utils/masks/maskNumberPhone'
import { useFormContext } from 'react-hook-form'

export const FormDadosRepresentante = () => {
  const { register } = useFormContext()

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Nome"
            name="nome"
            {...register("representante.dados.nome")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Nome social"
            name="nomeSocial"
            {...register("representante.dados.nomeSocial")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="RG"
            name="rg"
            {...register("representante.dados.rg")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="CPF"
            name="cpf"
            {...register("representante.dados.cpf")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Data de nascimento"
            name="dataNascimento"
            {...register("representante.dados.dataNascimento")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Nome da mãe"
            name="nomeMaeRepresentante"
            {...register("representante.dados.nomeMaeRepresentante")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="UF de emissão"
            name="ufEmissao"
            {...register("representante.dados.ufEmissao")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            {...register("representante.dados.email")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Telefone"
            name="telefone"
            {...register("representante.dados.telefone")}
          />
        </Grid>
    </Grid>
  )
}