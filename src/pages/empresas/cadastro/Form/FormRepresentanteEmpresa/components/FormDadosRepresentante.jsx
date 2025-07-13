import { useFormContext, Controller } from 'react-hook-form'
import { TextField, Grid } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { maskHandler } from '../../../../../../shared/utils/masks/maskHandler'
import { maskCPF } from '../../../../../../shared/utils/masks/maskCPF'
import { maskRG } from '../../../../../../shared/utils/masks/maskRG'
import { maskNumberPhone } from '../../../../../../shared/utils/masks/maskNumberPhone'
import React, { useRef } from 'react'
import { handleEnterKeyPress } from '../../../../../../shared/hooks/handleEnterKeyPress'
import dayjs from 'dayjs'
import { maskOnlyLetters } from '../../../../../../shared/utils/masks/maskOnlyLetters'
import { cpfValidator } from '../../../../../../shared/utils/validators/cpfValidator'
import { rgValidator } from '../../../../../../shared/utils/validators/rgValidator'
import { pastOrTodayDateValidator } from '../../../../../../shared/utils/validators/pastOrTodayDateValidator'
import { emailValidator } from '../../../../../../shared/utils/validators/emailValidator'
import { numberPhoneValidator } from '../../../../../../shared/utils/validators/numberPhoneValidator'
import { getRefs, getRefValue } from '../../../FormRefs'

export const FormDadosRepresentante = () => {
  const { control } = useFormContext()

  const currentDate = dayjs()

  return (
    <Grid container spacing={2}>
      
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name='representante.dados.nome'
          control={control}
          rules={{
            required: 'Nome completo é obrigatório'
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='Nome completo'
              name='nome'
              value={value || ''}
              onChange={event => maskHandler(maskOnlyLetters, 150)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('representante.dados.nome')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('representante.dados.nomeSocial'))}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='representante.dados.nomeSocial'
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='Nome social (não obrigatório)'
              name='nomeSocial'
              value={value || ''}
              onChange={event => maskHandler(maskOnlyLetters, 70)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('representante.dados.nomeSocial')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('representante.dados.rg'))}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='representante.dados.rg'
          control={control}
          rules={{
            required: 'RG é obrigatório',
            validate: rgValidator
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='RG'
              name='rg'
              value={value || ''}
              onChange={event => maskHandler(maskRG)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('representante.dados.rg')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('representante.dados.cpf'))}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='representante.dados.cpf'
          control={control}
          rules={{
            required: 'CPF é obrigatório',
            validate: cpfValidator
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='CPF'
              name='cpf'
              value={value || ''}
              onChange={event => maskHandler(maskCPF)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('representante.dados.cpf')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('representante.dados.dataNascimento'))}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='representante.dados.dataNascimento'
          control={control}
          rules={{
            required: 'Data de nascimento é obrigatória',
            validate: pastOrTodayDateValidator
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='Data de nascimento'
                format='DD/MM/YYYY'
                maxDate={currentDate}
                value={value || null}
                onChange={onChange}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    inputRef: getRefs('representante.dados.dataNascimento'),
                    onBlur,
                    error: !!error,
                    helperText: error?.message,
                    onKeyDown: (event) =>
                      handleEnterKeyPress(event, getRefValue('representante.dados.nomeMaeRepresentante'))
                  }
                }}
              />
            </LocalizationProvider>
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name='representante.dados.nomeMaeRepresentante'
          control={control}
          rules={{
            required: 'Nome da mãe é obrigatório'
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='Nome da mãe'
              name='nomeMaeRepresentante'
              value={value || ''}
              onChange={event => maskHandler(maskOnlyLetters, 150)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('representante.dados.nomeMaeRepresentante')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('representante.dados.ufEmissao'))}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='representante.dados.ufEmissao'
          control={control}
          rules={{
            required: 'UF de emissão do documento é obrigatório'
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='UF de emissão'
              name='ufEmissao'
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('representante.dados.ufEmissao')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('representante.dados.email'))}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name='representante.dados.email'
          control={control}
          rules={{
            required: 'Email é obrigatório',
            validate: emailValidator
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='Email'
              name='email'
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('representante.dados.email')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('representante.dados.telefone'))}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='representante.dados.telefone'
          control={control}
          rules={{
            required: 'Número de telefone é obrigatório',
            validate: numberPhoneValidator
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='Telefone'
              name='telefone'
              value={value || ''}
              onChange={event => maskHandler(maskNumberPhone)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('representante.dados.telefone')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('representante.endereco.cep'))}            
            />
          )}
        />
      </Grid>

    </Grid>
  )
}