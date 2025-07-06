import { useFormContext, Controller } from 'react-hook-form'
import { TextField, Grid } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { maskHandler } from '../../../../../../shared/utils/maskHandler'
import { maskCPF } from '../../../../../../shared/utils/masks/maskCPF'
import { maskRG } from '../../../../../../shared/utils/masks/maskRG'
import { maskNumberPhone } from '../../../../../../shared/utils/masks/maskNumberPhone'
import React, { useRef } from 'react'
import { handleEnterKeyPress } from '../../../../../../shared/hooks/handleEnterKeyPress'
import dayjs from 'dayjs'

export const FormDadosRepresentante = () => {
  const { control } = useFormContext()

  const TextFieldRefs = useRef({})

  const getRefs = (nome) => {
    if (!TextFieldRefs.current[nome]) {
        TextFieldRefs.current[nome] = React.createRef()
    }
    return TextFieldRefs.current[nome]
  }

  const currentDate = dayjs()

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
              inputRef={getRefs("representante.dados.nome")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["representante.dados.nomeSocial"])}
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
              inputRef={getRefs("representante.dados.nomeSocial")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["representante.dados.rg"])}
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
              onChange={event => maskHandler(maskRG)(event, onChange)}
              inputRef={getRefs("representante.dados.rg")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["representante.dados.cpf"])}
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
              onChange={event => maskHandler(maskCPF)(event, onChange)}
              inputRef={getRefs("representante.dados.cpf")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["representante.dados.dataNascimento"])}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="representante.dados.dataNascimento"
          control={control}
          render={({ field: { onChange, value } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Data de nascimento"
                format="DD/MM/YYYY"
                maxDate={currentDate}
                value={value || null}
                onChange={onChange}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    inputRef: getRefs("representante.dados.dataNascimento"),
                    onKeyDown: (event) =>
                      handleEnterKeyPress(event, TextFieldRefs.current["representante.dados.nomeMaeRepresentante"]),
                  },
                }}
              />
            </LocalizationProvider>
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
              inputRef={getRefs("representante.dados.nomeMaeRepresentante")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["representante.dados.ufEmissao"])}
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
              inputRef={getRefs("representante.dados.ufEmissao")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["representante.dados.email"])}
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
              inputRef={getRefs("representante.dados.email")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["representante.dados.telefone"])}
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
              onChange={event => maskHandler(maskNumberPhone)(event, onChange)}
              inputRef={getRefs("representante.dados.telefone")}
              onKeyDown={(event) => handleEnterKeyPress(event, null)} // último campo, sem próximo
            />
          )}
        />
      </Grid>

    </Grid>
  )
}