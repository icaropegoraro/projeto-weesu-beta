import { TextField, Box } from '@mui/material'
import { maskNumberPhone } from '../../../../../../shared/utils/masks/maskNumberPhone'
import { useFormContext } from 'react-hook-form'

export const FormDadosRepresentante = () => {
  const { register } = useFormContext()

  return (
    <Box>
      <TextField
        label="CPF"
        name="cpf"
        {...register("representante.cpf")}
      />

      <TextField
        label="Nome"
        name="nome"
        {...register("representante.nome")}
      />

      <TextField
        label="Nome social"
        name="nomeSocial"
        {...register("representante.nomeSocial")}
      />

      <TextField
        label="RG"
        name="rg"
        {...register("representante.rg")}
      />

      <TextField
        label="UF de emissão"
        name="ufEmissao"
        {...register("representante.ufEmissao")}
      />

      <TextField
        label="Telefone"
        name="telefone"
        {...register("representante.telefone")}
      />

      <TextField
        label="Nome da mãe"
        name="nomeMaeRepresentante"
        {...register("representante.nomeMaeRepresentante")}
      />

      <TextField
        label="Email"
        name="email"
        {...register("representante.email")}
      />

      <TextField
        label="Data de nascimento"
        name="dataNascimento"
        {...register("representante.dataNascimento")}
      />
    </Box>
  );
};