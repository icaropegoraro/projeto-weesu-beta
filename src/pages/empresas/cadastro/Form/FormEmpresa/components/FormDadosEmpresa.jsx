import { useFormContext, Controller } from "react-hook-form"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { TextField, Grid, MenuItem } from "@mui/material"
import { maskCNPJ, maskHandler, maskNumberPhone, maskCNAE, maskMoney, maskOnlyNumbers } from '../../../../../../shared/utils/masks'
import { handleEnterKeyPress } from "../../../../../../shared/hooks/handleEnterKeyPress"
import React, { useRef }  from "react"
import dayjs from "dayjs"


export const FormDadosEmpresa = () => {
  const { control } = useFormContext()

  const TextFieldRefs = useRef({}) 

  const getRefs = (nome) => {
    if (!TextFieldRefs.current[nome]) {
      TextFieldRefs.current[nome] = React.createRef()
    }
    return TextFieldRefs.current[nome]
  }

  const currentDate = dayjs()

  const vencimento = [
    {
      value: 5,
      label: '5'
    },
    {
      value: 10,
      label: '10'
    },
    {
      value: 15,
      label: '15'
    },
    {
      value: 20,
      label: 20
    },
    {
      value: 25,
      label: 25
    },
  ]

  const formatoConstituicao = [
    {
      value: 'MEI',
      label: 'Microempreendedor Individual'
    },
    {
      value: 'EI',
      label: 'Empresário Individual'
    },
    {
      value: 'LTDA',
      label: 'Sociedade Limitada'
    },
    {
      value: 'SLU',
      label: 'Sociedade Limitada Unipessoal'
    },
    {
      value: 'SS',
      label: 'Sociedade Simples'
    },
    {
      value: 'SA',
      label: 'Sociedade Anônima'
    }
  ]

  const regimeTributario = [
    {
      value: 'Simples Nacional',
      label: 'Simples Nacional'
    },
    {
      value: 'Lucro Presumido',
      label: 'Lucro Presumido' 
    },
    {
      value: 'Lucro Real',
      label: 'Lucro Real'
    }
  ]

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="empresa.dados.cnpj"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="CNPJ"
              name="cnpj"
              value={value || ''}
              onChange={(event) => maskHandler(maskCNPJ)(event, onChange)}
              inputRef={getRefs("empresa.dados.cnpj")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.razaoSocial"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
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
              inputRef={getRefs("empresa.dados.razaoSocial")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.nomeFantasia"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
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
              inputRef={getRefs("empresa.dados.nomeFantasia")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.inscricaoEstadual"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="empresa.dados.inscricaoEstadual"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Inscrição Estadual"
              name="inscricaoEstadual"
              value={value || ''}
              onChange={event => maskHandler(maskOnlyNumbers, 14)(event, onChange)}
              inputRef={getRefs("empresa.dados.inscricaoEstadual")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.email"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
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
              inputRef={getRefs("empresa.dados.email")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.telefone"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
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
              inputRef={getRefs("empresa.dados.telefone")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.qtdClientes"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="empresa.dados.qtdClientes"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label='Quantidade de Clientes'
              name='qtdClientes'
              value={value || ''}
              onChange={(event) => maskHandler(maskOnlyNumbers, 8)(event, onChange)}
              inputRef={getRefs("empresa.dados.qtdClientes")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.vencimento"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="empresa.dados.vencimento"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              select
              fullWidth
              label="Vencimento"
              name="vencimento"
              value={value || ''}
              onChange={onChange}
              inputRef={getRefs("empresa.dados.vencimento")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.dataAbertura"])
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
          name="empresa.dados.dataAbertura"
          control={control}
          render={({ field: { onChange, value } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Data de abertura"
                format="DD/MM/YYYY"
                maxDate={currentDate}
                value={value || null}
                onChange={onChange}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    inputRef: getRefs("empresa.dados.dataAbertura"),
                    onKeyDown: (event) =>
                      handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.cnae"]),
                  },
                }}
              />
            </LocalizationProvider>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
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
              inputRef={getRefs("empresa.dados.cnae")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.faturamento"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="empresa.dados.faturamento"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label="Faturamento (R$)"
              name="faturamento"
              value={value || ''}
              onChange={(event) => maskHandler(maskMoney)(event, onChange)}
              inputRef={getRefs("empresa.dados.faturamento")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.tipoAtuacao"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
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
              inputRef={getRefs("empresa.dados.tipoAtuacao")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.regimeTributario"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Controller
          name="empresa.dados.regimeTributario"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              select
              fullWidth
              label="Regime Tributário"
              name="regimeTributario"
              value={value || ''}
              onChange={onChange}
              inputRef={getRefs("empresa.dados.regimeTributario")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.formatoConstituicao"])
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
          name="empresa.dados.formatoConstituicao"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              select
              fullWidth
              label="Formato de constituição"
              name="formatoConstituicao"
              value={value || ''}
              onChange={onChange}
              inputRef={getRefs("empresa.dados.formatoConstituicao")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.endereco.cep"])
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