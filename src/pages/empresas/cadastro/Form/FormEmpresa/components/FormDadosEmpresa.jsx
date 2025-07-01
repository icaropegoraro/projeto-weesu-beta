import { useFormContext, Controller } from "react-hook-form"
import { TextField, Grid } from "@mui/material"
import { maskHandler } from "../../../../../../shared/utils/maskHandler"
import { maskCNPJ } from "../../../../../../shared/utils/masks/maskCNPJ"
import { maskNumberPhone } from "../../../../../../shared/utils/masks/maskNumberPhone"
import { maskCNAE } from "../../../../../../shared/utils/masks/maskCNAE"
import { handleEnterKeyPress } from "../../../../../../shared/hooks/handleEnterKeyPress"
import React, { useRef }  from "react"

export const FormDadosEmpresa = () => {
  const { control } = useFormContext()

  const TextFieldRefs = useRef({}) 

  const getRefs = (nome) => {
    if (!TextFieldRefs.current[nome]) {
      TextFieldRefs.current[nome] = React.createRef()
    }
    return TextFieldRefs.current[nome]
  }

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
              onChange={onChange}
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
              label="Quantidade de Clientes"
              name="qtdClientes"
              value={value || ''}
              onChange={onChange}
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
              fullWidth
              label="Vencimento"
              name="vencimento"
              value={value || ''}
              onChange={onChange}
              inputRef={getRefs("empresa.dados.vencimento")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.dataAbertura"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
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
              inputRef={getRefs("empresa.dados.dataAbertura")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.cnae"])
              }
            />
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
              label="Faturamento"
              name="faturamento"
              value={value || ''}
              onChange={onChange}
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
              fullWidth
              label="Regime Tributário"
              name="regimeTributario"
              value={value || ''}
              onChange={onChange}
              inputRef={getRefs("empresa.dados.regimeTributario")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.dados.formatoConstituicao"])
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
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
              inputRef={getRefs("empresa.dados.formatoConstituicao")}
              onKeyDown={(event) => handleEnterKeyPress(event, TextFieldRefs.current["empresa.endereco.cep"])
              }
            />
          )}
        />
      </Grid>

    </Grid>
  )
}