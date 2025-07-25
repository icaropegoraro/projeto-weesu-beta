// React Hook Form
import { useFormContext, Controller, useWatch } from 'react-hook-form'

// MUI
import { TextField, Grid, MenuItem, Checkbox, InputAdornment, FormControlLabel } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'

// DayJS
import dayjs from 'dayjs'

// Utils
import { validatorCNPJ, validatorEmail, validatorNumberPhone, validatorPastOrToday, validatorCNAE } from '../../../../../../shared/utils/validators'
import { maskCNPJ, maskHandler, maskNumberPhone, maskCNAE, maskMoney, maskOnlyNumbers } from '../../../../../../shared/utils/masks'
import { handleEnterKeyPress } from '../../../../../../shared/hooks/handleEnterKeyPress'

// Form Options
import { vencimento, regimeTributario, formatoConstituicao } from '../../../../../../shared/components/formDataOptions'

// Form Refs
import { getRefs, getRefValue } from '../../../FormRefs'

export const FormDadosEmpresa = () => {
  const { control } = useFormContext()

  const currentDate = dayjs()

  const isencaoIE = useWatch({ name: 'empresa.dados.isencaoIE' }) ?? false

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.cnpj'
          control={control}
          rules={{
            required: 'CNPJ é obrigatório',
            validate: validatorCNPJ
            }
          }
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='CNPJ'
              name='cnpj'
              value={value || ''}
              onChange={(event) => maskHandler(maskCNPJ)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.cnpj')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.dados.razaoSocial'))
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name='empresa.dados.razaoSocial'
          control={control}
          rules={{
            required: 'Razão social é obrigatório'
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='Razão social'
              name='razaoSocial'
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.razaoSocial')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.dados.nomeFantasia'))
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.nomeFantasia'
          control={control}
          rules={{
            required: 'Nome fantasia é obrigatório'
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='Nome fantasia'
              name='nomeFantasia'
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.nomeFantasia')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue( isencaoIE ? 'empresa.dados.email' : 'empresa.dados.inscricaoEstadual' ))
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.inscricaoEstadual'
          control={control}
          rules={!isencaoIE ? { required: 'Inscrição estadual é obrigatório'} : {}}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              disabled={isencaoIE}
              fullWidth
              label='Inscrição estadual'
              name='inscricaoEstadual'
              value={value || ''}
              onChange={event => maskHandler(maskOnlyNumbers, 14)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.inscricaoEstadual')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.dados.email'))
              }
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Controller
                        name='empresa.dados.isencaoIE'
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <FormControlLabel
                            label='Isento'
                            control={
                              <Checkbox
                                checked={field.value}
                                onChange={(e) => field.onChange(e.target.checked)}
                              />
                            }
                          />
                        )}
                      />
                    </InputAdornment>
                  )
                }
              }}
            />
              
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name='empresa.dados.email'
          control={control}
          rules={{
            required: 'Email da empresa é obrigatório',
            validate: validatorEmail
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
              inputRef={getRefs('empresa.dados.email')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.dados.telefone'))
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.telefone'
          control={control}
          rules={{
            required: 'Número de telefone é obrigatório',
            validate: validatorNumberPhone
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='Telefone'
              name='telefone'
              value={value || ''}
              onChange={(event) => maskHandler(maskNumberPhone)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.telefone')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.dados.qtdClientes'))
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.qtdClientes'
          control={control}
          rules={{
            required: 'Quantidade de clientes é obrigatório'
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='Quantidade de clientes'
              name='qtdClientes'
              value={value || ''}
              onChange={(event) => maskHandler(maskOnlyNumbers, 8)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.qtdClientes')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.dados.vencimento'))
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.vencimento'
          control={control}
          rules={{
            required: 'Vencimento é obrigatório'
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              select
              fullWidth
              label='Vencimento'
              name='vencimento'
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.vencimento')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.dados.dataAbertura'))
              }
            >
              {vencimento.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.dataAbertura'
          control={control}
          rules={{
            required: 'Data de abertura é obrigatório',
            validate: validatorPastOrToday
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='Data de abertura'
                format='DD/MM/YYYY'
                maxDate={currentDate}
                value={value}
                onChange={onChange}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    inputRef: getRefs('empresa.dados.dataAbertura'),
                    onBlur,
                    error: !!error,
                    helperText: error?.message,
                    onKeyDown: (event) =>
                      handleEnterKeyPress(event, getRefValue('empresa.dados.cnae'))
                  }
                }}
              />
            </LocalizationProvider>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.cnae'
          control={control}
          rules={{
            required: 'CNAE é obrigatório',
            validate: validatorCNAE
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='CNAE'
              name='cnae'
              value={value || ''}
              onChange={(event) => maskHandler(maskCNAE)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.cnae')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.dados.faturamento'))}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.faturamento'
          control={control}
          rules={{
            required: 'Faturamento é obrigatório'
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='Faturamento (R$)'
              name='faturamento'
              value={value || ''}
              onChange={(event) => maskHandler(maskMoney)(event, onChange)}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.faturamento')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.dados.tipoAtuacao'))
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.tipoAtuacao'
          control={control}
          rules={{
            required: 'Tipo de atuação é obrigatório'
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              label='Tipo de atuação'
              name='tipoAtuacao'
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.tipoAtuacao')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.dados.regimeTributario'))
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.regimeTributario'
          control={control}
          rules={{
            required: 'Regime tributário é obrigatório'
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              select
              fullWidth
              label='Regime tributário'
              name='regimeTributario'
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.regimeTributario')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.dados.formatoConstituicao'))
              }
            >
              {regimeTributario.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name='empresa.dados.formatoConstituicao'
          control={control}
          rules={{
            required: 'Formato de constituição é obrigatório'
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <TextField
              select
              fullWidth
              label='Formato de constituição'
              name='formatoConstituicao'
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              error={!!error}
              helperText={error?.message}
              inputRef={getRefs('empresa.dados.formatoConstituicao')}
              onKeyDown={(event) => handleEnterKeyPress(event, getRefValue('empresa.endereco.cep'))
              }
            >
              {formatoConstituicao.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>

    </Grid>
  )
}