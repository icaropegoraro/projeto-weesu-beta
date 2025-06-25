import { TextField, Box, Grid } from '@mui/material'
import { maskNumberPhone } from '../../../../../../shared/utils/masks/maskNumberPhone'
import { useFormContext } from 'react-hook-form'

export const FormDadosRepresentante = () => {
  const { register } = useFormContext()

  return (
    <Box>
      <Grid>
        <TextField
          label="CPF"
          name="cpf"
          {...register("representante.cpf")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Nome"
          name="nome"
          {...register("representante.nome")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Nome social"
          name="nomeSocial"
          {...register("representante.nomeSocial")}
        />
      </Grid>

      <Grid>
        <TextField
          label="RG"
          name="rg"
          {...register("representante.rg")}
        />
      </Grid>

      <Grid>
        <TextField
          label="UF de emissão"
          name="ufEmissao"
          {...register("representante.ufEmissao")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Telefone"
          name="telefone"
          {...register("representante.telefone")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Nome da mãe"
          name="nomeMaeRepresentante"
          {...register("representante.nomeMaeRepresentante")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Email"
          name="email"
          {...register("representante.email")}
        />
      </Grid>

      <Grid>
        <TextField
          label="Data de nascimento"
          name="dataNascimento"
          {...register("representante.dataNascimento")}
        />
      </Grid>

    </Box>
  );
};