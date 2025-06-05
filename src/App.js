import React, { useState, useEffect, } from "react";
import WeesuLogo from "./img/WeesuPNG.png"
import {
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Button,
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  ThemeProvider,
  InputAdornment,
  Box,
  IconButton,
} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./theme";
import LoginIcon from '@mui/icons-material/Login';
  
const estadosBrasil = [
  { sigla: "AC", nome: "Acre" }, { sigla: "AL", nome: "Alagoas" },
  { sigla: "AM", nome: "Amazonas" }, { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" }, { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" }, { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" }, { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" }, { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" }, { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" }, { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" }, { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" }, { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" }, { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" }, { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" }, { sigla: "TO", nome: "Tocantins" },
];

const App = () => {

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const [cidades, setCidades] = useState({
    enderecoEmpresa: [],
    enderecoRepresentante: []
  });

  const [ufOrigemCEP, setUfOrigemCEP] = useState({ enderecoEmpresa: false, enderecoRepresentante: false });

  const [form, setForm] = useState({
    empresa: {
      cnpj: "",
      razaoSocial: "",
      nomeFantasia: "",
      inscricaoEstadual: " ",
      isencao: false,
      email: "",
      telefone: "",
      qtdClientes: "",
      vencimento: "",
      dataAbertura: "",
      cnae: "",
      faturamento: "",
      tipoAtuacao: "",
      regimeTributario: "",
      formatoConstituicao: "",
    } , 
    enderecoEmpresa: {
      cep: "",
      street: "",
      streetNumber: "",
      complemento: "",
      bairro: "",
      uf: "",
      cidade: "",
    },
    representante: {
      cpf: "",
      nome: "",
      nomeSocial: "",
      rg: "",
      ufEmissao: "",
      telefone: "",
      nomeMaeRepresentante: "",
      email: "",
      dataNascimento: "",
    },
    enderecoRepresentante: {
      cep: "",
      street: "",
      streetNumber: "",
      complemento: "",
      bairro: "",
      uf: "",
      cidade: "",
    }
  });

  const [errors, setErrors] = useState({}); 

  const steps = ["Empresa", "Representante"];

  const formatCNPJ = (value) => {
    value = value.replace(/\D/g, ""); 
    value = value.slice(0, 14); 
    return value
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  };

  const validarCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/\D/g, '');
    if (cnpj.length !== 14) return "CNPJ incompleto";
    
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) return "CNPJ inválido";
  
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(1))) return "CNPJ inválido";
  
    return null;
  };

  const formatIE = (value) => {
    value = value.replace(/\D/g, "");
    value = value.slice(0, 9);
    return value;
  };

  const validarInscricaoEstadual = (value) => {
    value = value.replace(/\D/g, '');
    if (value.length !== 9) return "Inscrição Estadual incompleta";
    
    
    return null;
  };


  const formatTelefone = (value) => {
    value = value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const naoPermiteNumeroNegativo = (value) => {
    if (value < 0) {
        value = 0
    }
    return value;
  }

  const formatCNAE = (value) => {
    value = value.replace(/\D/g, '');

    if (value.length > 7) value = value.slice(0, 7);

    if (value.length > 4) value = value.replace(/^(\d{4})(\d)/, '$1-$2');
    if (value.length > 5) value = value.replace(/^(\d{4})-(\d)(\d)/, '$1-$2/$3');

    return value;
  }

  const validarCNAE = (cnae) => {
    cnae = cnae.replace(/\D/g, '');
    if (cnae.length !== 7) return "CNAE incompleto";
    return null;
  };
  
  const formatFaturamento = (value) => {
    value = value.replace(/\D/g, '');
  
    if (value.length === 0) {
      return ''; 
    }

    return (parseFloat(value) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const removeNumeros = (value) => {
    return value.replace(/\d+/g, ''); 
  };

  const onlyNumber = (value) => {
    return value.replace(/\D/g, '');
  };

  const formatCEP = (value) => {
    value = value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length > 5) value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    return value;
  };

  const validarCEP = (cep) => {
    cep = cep.replace(/\D/g, '');
    if (cep.length !== 8) return "CEP incompleto";
    return null;
  };

  const formatCPF = (value) => {
    value = value.replace(/\D/g, ''); 

    if (value.length > 11) value = value.slice(0, 11); 

    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    }
    
    return value;
  }

  const validarCPF = (cpf) => {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return "CPF incompleto";
    
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return "CPF inválido";
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return "CPF inválido";
  
    return null;
  };

  const formatRG = (value) => {
    value = value.replace(/\D/g, ''); 

    if (value.length > 9) value = value.slice(0, 9);

    if (value.length > 2) value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    if (value.length > 6) value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    if (value.length > 9) value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

    return value;
  }

  const validarRG = (rg) => {
    rg = rg.replace(/\D/g, '');
    if (rg.length < 8) return "RG incompleto";
    return null;
  };

  const buscarCEP = async (cep, endereco) => {
    cep = cep.replace(/\D/g, '');
  
    if (cep.length !== 8) return;
  
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
  
      if (!data.erro) {
        setForm((prev) => ({
          ...prev,
          [endereco]: {
            ...prev[endereco],
            cep: formatCEP(cep),
            uf: data.uf || '',
            cidade: data.localidade || '',
          }
        }));

        setUfOrigemCEP((prev) => ({ ...prev, [endereco]: true }));

        await buscarCidades(data.uf);
      }
  
      console.log(data.erro ? "CEP não encontrado" : "CEP encontrado ✅");
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  const buscarCidades = async (uf, endereco) => {
    if (!uf) return;
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
      const data = await response.json();
      setCidades((prev) => ({
        ...prev,
        [endereco]: data.map((cidade) => cidade.nome) 
      }));
    } catch (error) {
      console.error("Erro ao buscar cidades:", error);
    }
  };

  useEffect(() => {
    if (form.enderecoEmpresa.uf) {
      buscarCidades(form.enderecoEmpresa.uf, "enderecoEmpresa"); 
    }
  }, [form.enderecoEmpresa.uf]);
  
  useEffect(() => {
    if (form.enderecoRepresentante.uf) {
      buscarCidades(form.enderecoRepresentante.uf, "enderecoRepresentante"); 
    }
  }, [form.enderecoRepresentante.uf]);
  

  const handleChange = (e, endereco) => {
    const { name, value, type, checked } = e.target;

    if (value !== "") {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[`${endereco}-${name}`];
        return newErrors;
      });
    }

    if (name === "isencao") {
      setForm((prev) => ({
          ...prev,
          [endereco]: {
              ...prev[endereco],
              [name]: checked,
              inscricaoEstadual: checked ? "" : prev[endereco].inscricaoEstadual,
          }
      }));
      return;
  }

  if (name === "cep" && value.replace(/\D/g, "").length === 8) {
    buscarCEP(value, endereco);
  }

    setForm((prev) => ({
      ...prev,
      [endereco]: {
        ...prev[endereco],
        [name]:
        name === "cnpj"
          ? formatCNPJ(value)
          : name === "inscricaoEstadual"
          ? formatIE(value)
          : name === "telefone"
          ? formatTelefone(value)
          : name === "cnae"
          ? formatCNAE(value)
          : name === "qtdClientes"
          ? naoPermiteNumeroNegativo(value)
          : name === "faturamento"
          ? formatFaturamento(value)
          : name === "nomeFantasia"
          ? removeNumeros(value)
          : name === "cep"
          ? formatCEP(value)
          : name === "streetNumber"
          ? onlyNumber(value)
          : name === "cpf"
          ? formatCPF(value)
          : name === "nome"
          ? removeNumeros(value)
          : name === "rg"
          ? formatRG(value)
          : type === "checkbox"
          ? checked
          : value,

      }
    }
    )
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    for (const section in form) {
      for (const field in form[section]) {

        const value = form[section][field];
        const fieldKey = `${section}-${field}`;

        if (value === "" && field !== 'isencao' && !(field === 'inscricaoEstadual' && form[section].isencao)) {
          newErrors[fieldKey] = 'Este campo é obrigatório';
          continue;
        }


        

        switch (field) {
          case 'cpf':
            if (value) {
              const erroCPF = validarCPF(value);
              if (erroCPF) newErrors[fieldKey] = erroCPF;
            }
            break;
            
          case 'cnpj':
            if (value) {
              const erroCNPJ = validarCNPJ(value);
              if (erroCNPJ) newErrors[fieldKey] = erroCNPJ;
            }
            break;
            
          case 'rg':
            if (value) {
              const erroRG = validarRG(value);
              if (erroRG) newErrors[fieldKey] = erroRG;
            }
            break;
            
          case 'inscricaoEstadual':
            if (value) {
              if (!form[section].isencao) {
                const erroIE = validarInscricaoEstadual(value);
                if (erroIE) newErrors[fieldKey] = erroIE;
            }
            }
            break;
            
          case 'cnae':
            if (value) {
              const erroCNAE = validarCNAE(value);
              if (erroCNAE) newErrors[fieldKey] = erroCNAE;
            }
            break;
            
          case 'cep':
            if (value) {
              const erroCEP = validarCEP(value);
              if (erroCEP) newErrors[fieldKey] = erroCEP;
            }
            break;
            
          default:
            break;
        }
      } 
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log(form);
    };
  }

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          
          <Container maxWidth="lg" style={{ marginTop: 20 }}>

            <Typography variant="h4" gutterBottom>
              Dados da Empresa
            </Typography>

            <form onSubmit={handleSubmit}>

              <Grid container spacing={2} borderRadius={5} style={{backgroundColor: "#A2C62C", padding: 20}}>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    label="CNPJ"
                    name="cnpj"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "empresa")}
                    value={form.empresa.cnpj}
                    required
                    error={!!errors['empresa-cnpj']}
                    helperText={errors['empresa-cnpj']}
                    InputLabelProps={{
                      width: "100%",
                      required: false,  
                    }}
                    
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 6 }}>
                  <TextField
                    label="Razão Social"
                    name="razaoSocial"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "empresa")}
                    value={form.empresa.razaoSocial}
                    required
                    error={!!errors['empresa-razaoSocial']}
                    helperText={errors['empresa-razaoSocial']}
                    InputLabelProps={{
                      required: false,  
                    }}
                    sx={{
                      '& .MuiInputLabel-root': {
                        whiteSpace: 'nowrap',
                      },
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    label="Nome Fantasia"
                    name="nomeFantasia"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "empresa")}
                    value={form.empresa.nomeFantasia}
                    required
                    error={!!errors['empresa-nomeFantasia']}
                    helperText={errors['empresa-nomeFantasia']}
                    InputLabelProps={{
                      required: false,  
                    }}
                  />
                </Grid>
                
                  <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                    <TextField
                      label="Inscrição Estadual"
                      name="inscricaoEstadual"
                      fullWidth
                      margin="normal"
                      onChange={(e) => handleChange(e, "empresa")}
                      value={form.empresa.inscricaoEstadual}
                      error={!!errors['empresa-inscricaoEstadual']}
                      helperText={errors['empresa-inscricaoEstadual']}
                      disabled={form.empresa.isencao}
                      InputLabelProps={{
                        shrink: true,
                        required: false,
                      }}
                      sx={{
                        '& .MuiInputLabel-root': {
                          whiteSpace: 'nowrap',
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="isencao"
                                  checked={form.empresa.isencao}
                                  onChange={(e) => handleChange(e, "empresa")}
                                />
                              }
                              label="Isento"
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                
                <Grid size={{ xs: 12, sm: 6 , md: 6 }}>
                  <TextField
                    label="E-mail Principal"
                    name="email"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "empresa")}
                    value={form.empresa.email}
                    required
                    error={!!errors['empresa-email']}
                    helperText={errors['empresa-email']}
                    InputLabelProps={{
                      required: false,  
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    label="Telefone"
                    name="telefone"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "empresa")}
                    value={form.empresa.telefone}
                    required
                    error={!!errors['empresa-telefone']}
                    helperText={errors['empresa-telefone']}
                    InputLabelProps={{
                      required: false,  
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    label="Quantidade de Clientes"
                    name="qtdClientes"
                    fullWidth
                    margin="normal"
                    type="number"
                    onChange={(e) => handleChange(e, "empresa")}
                    value={form.empresa.qtdClientes}
                    required
                    error={!!errors['empresa-qtdClientes']}
                    helperText={errors['empresa-qtdClientes']}
                    InputLabelProps={{
                      required: false,  
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    select
                    label="Dia do Vencimento"
                    name="vencimento"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "empresa")}
                    required
                    error={!!errors['empresa-vencimento']}
                    helperText={errors['empresa-vencimento']}
                    InputLabelProps={{
                      required: false,  
                    }}
                    value={form.empresa.vencimento}
                  >
                    {["10", "15", "20", "25"].map((option) => (
                      <MenuItem key={option} value={option} fullWidth>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    label="Data de Abertura"
                    name="dataAbertura"
                    fullWidth
                    margin="normal"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                      required: false,
                    }}
                    onChange={(e) => handleChange(e, "empresa")}
                    value={form.empresa.dataAbertura}
                    required
                    error={!!errors['empresa-dataAbertura']}
                    helperText={errors['empresa-dataAbertura']}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    label="CNAE Principal"
                    name="cnae"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "empresa")}
                    value={form.empresa.cnae}
                    required
                    error={!!errors['empresa-cnae']}
                    helperText={errors['empresa-cnae']}
                    InputLabelProps={{
                      required: false,  
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    label="Faturamento Mensal (R$)"
                    name="faturamento"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "empresa")}
                    value={form.empresa.faturamento}
                    required
                    error={!!errors['empresa-faturamento']}
                    helperText={errors['empresa-faturamento']}
                    InputLabelProps={{
                      required: false,  
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField 
                    select 
                    label="Tipo de Atuação" 
                    name="tipoAtuacao" 
                    fullWidth 
                    margin="normal" 
                    onChange={(e) => handleChange(e, "empresa")}
                    InputLabelProps={{
                      required: false,  
                    }}
                    value={form.empresa.tipoAtuacao}
                    required
                    error={!!errors['empresa-tipoAtuacao']}
                    helperText={errors['empresa-tipoAtuacao']}
                  >
                    {["1", "2", "3", "4", "5", "6"].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField 
                    select 
                    label="Regime Tributário" 
                    name="regimeTributario" 
                    fullWidth 
                    margin="normal" 
                    onChange={(e) => handleChange(e, "empresa")}
                    InputLabelProps={{
                      required: false, 
                    }}
                    value={form.empresa.regimeTributario}
                    required
                    error={!!errors['empresa-regimeTributario']}
                    helperText={errors['empresa-regimeTributario']}
                  >
                    {["1", "2", "3", "4", "5", "6"].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField 
                    select 
                    label="Formato de Constituição" 
                    name="formatoConstituicao" 
                    fullWidth 
                    margin="normal" 
                    onChange={(e) => handleChange(e, "empresa")}
                    InputLabelProps={{
                      required: false,
                    }}
                    value={form.empresa.formatoConstituicao}
                    required
                    error={!!errors['empresa-formatoConstituicao']}
                    helperText={errors['empresa-formatoConstituicao']}
                  >
                    {["1", "2", "3", "4", "5", "6"].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

              </Grid>

              <Typography variant="h4" gutterBottom style={{marginTop:20}}>
                Dados de Endereço
              </Typography>

              <Grid container spacing={2} borderRadius={5} style={{backgroundColor: "#A2C62C" , padding: 20}}>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    label="CEP"
                    name="cep"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "enderecoEmpresa")}
                    value={form.enderecoEmpresa.cep}
                    required
                    error={!!errors['enderecoEmpresa-cep']}
                    helperText={errors['enderecoEmpresa-cep']}
                    InputLabelProps={{
                      required: false,  
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 6 }}>
                  <TextField
                    label="Endereço"
                    name="street"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      required: false,  
                    }}
                    onChange={(e) => handleChange(e, "enderecoEmpresa")}
                    value={form.enderecoEmpresa.street}
                    required
                    error={!!errors['enderecoEmpresa-street']}
                    helperText={errors['enderecoEmpresa-street']}
                    
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    label="Número"
                    name="streetNumber"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "enderecoEmpresa")}
                    value={form.enderecoEmpresa.streetNumber}
                    required
                    error={!!errors['enderecoEmpresa-streetNumber']}
                    helperText={errors['enderecoEmpresa-streetNumber']}
                    InputLabelProps={{
                      required: false,  
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    label="Complemento"
                    name="complemento"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "enderecoEmpresa")}
                    value={form.enderecoEmpresa.complemento}
                    InputLabelProps={{
                      required: false,  
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    label="Bairro"
                    name="bairro"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange(e, "enderecoEmpresa")}
                    value={form.enderecoEmpresa.bairro}
                    required
                    error={!!errors['enderecoEmpresa-bairro']}
                    helperText={errors['enderecoEmpresa-bairro']}
                    InputLabelProps={{
                      required: false,  
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    select
                    label="UF"
                    name="uf"
                    fullWidth
                    margin="normal"
                    value={form.enderecoEmpresa.uf}
                    onChange={(e) => handleChange(e, "enderecoEmpresa")}
                    required
                    error={!!errors['enderecoEmpresa-uf']}
                    helperText={errors['enderecoEmpresa-uf']}
                    InputLabelProps={{
                      required: false,  
                    }}
                    >
                    {estadosBrasil.map((estado) => (
                      <MenuItem key={estado.sigla} value={estado.sigla}>
                        {estado.nome}
                      </MenuItem>
                    )
                    )
                    }
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                  <TextField
                    select
                    label="Cidade"
                    name="cidade"
                    fullWidth
                    margin="normal"
                    value={form.enderecoEmpresa.cidade}
                    onChange={(e) => handleChange(e, "enderecoEmpresa")}
                    disabled={!form.enderecoEmpresa.uf}
                    required
                    error={!!errors['enderecoEmpresa-cidade']}
                    helperText={errors['enderecoEmpresa-cidade']}
                    InputLabelProps={{
                      required: false,  
                    }}
                    >
                    { (cidades.enderecoEmpresa || []).map((cidade) => (
                        <MenuItem key={cidade} value={cidade}>{cidade}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

              </Grid>
            
            </form>

          </Container>
        );
      case 1:
        return (
          <Container maxWidth="lg" style={{ marginTop: 20 }}>
          <Typography variant="h4" gutterBottom>
            Dados do Representante
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} borderRadius={5} style={{backgroundColor: "#A2C62C" , padding: 20}}>
              

              <Grid size={{ xs: 12, sm: 6 , md: 6 }}>
                <TextField
                  label="Nome Completo"
                  name="nome"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "representante")}
                  value={form.representante.nome}
                  required
                  error={!!errors['representante-nome']}
                  helperText={errors['representante-nome']}
                  InputLabelProps={{
                    required: false,  
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  label="Nome Social"
                  name="nomeSocial"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "representante")}
                  value={form.representante.nomeSocial}
                  InputLabelProps={{
                    required: false,  
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  label="CPF"
                  name="cpf"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "representante")}
                  value={form.representante.cpf}
                  required
                  error={!!errors['representante-cpf']}
                  helperText={errors['representante-cpf']}
                  InputLabelProps={{
                    required: false,  
                  }}
                  
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  label="RG"
                  name="rg"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "representante")}
                  value={form.representante.rg}
                  required
                  error={!!errors['representante-rg']}
                  helperText={errors['representante-rg']}
                  InputLabelProps={{
                    required: false,  
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  select
                  label="UF de Emissão"
                  name="ufEmissao"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "representante")}
                  value={form.representante.ufEmissao}
                  required
                  error={!!errors['representante-ufEmissao']}
                  helperText={errors['representante-ufEmissao']}
                  InputLabelProps={{
                    required: false,  
                  }}
                  >
                  {estadosBrasil.map((estado) => (
                    <MenuItem key={estado.sigla} value={estado.sigla}>
                      {estado.sigla}
                    </MenuItem>
                  )
                  )
                  }
                </TextField>
              </Grid>

              

              <Grid size={{ xs: 12, sm: 6 , md: 6 }}>
                <TextField
                  label="Nome da Mãe"
                  name="nomeMaeRepresentante"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "representante")}
                  value={form.representante.nomeMaeRepresentante}
                  required
                  error={!!errors['representante-nomeMaeRepresentante']}
                  helperText={errors['representante-nomeMaeRepresentante']}
                  InputLabelProps={{
                    required: false,  
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  label="Data de Nascimento"
                  name="dataNascimento"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "representante")}
                  type="date"
                  required
                  error={!!errors['representante-dataNascimento']}
                  helperText={errors['representante-dataNascimento']}
                  InputLabelProps={{
                    shrink: true,
                    required: false,  
                  }}
                  value={form.representante.dataNascimento}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  label="Telefone"
                  name="telefone"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "representante")}
                  value={form.representante.telefone}
                  required
                  error={!!errors['representante-telefone']}
                  helperText={errors['representante-telefone']}
                  InputLabelProps={{
                    required: false,  
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 6 }}>
                <TextField
                  label="Email Principal"
                  name="email"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "representante")}
                  value={form.representante.email}
                  required
                  error={!!errors['representante-email']}
                  helperText={errors['representante-email']}
                  InputLabelProps={{
                    required: false,  
                  }}
                />
              </Grid> 

            </Grid>

            <Typography variant="h4" gutterBottom style={{marginTop:20}}>
              Dados de Endereço
            </Typography>

            <Grid container spacing={2} borderRadius={5} style={{backgroundColor: "#A2C62C" , padding: 20}}>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  label="CEP"
                  name="cep"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "enderecoRepresentante")}
                  value={form.enderecoRepresentante.cep}
                  required
                  error={!!errors['enderecoRepresentante-cep']}
                  helperText={errors['enderecoRepresentante-cep']}
                  InputLabelProps={{
                    required: false,  
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 6 }}>
                <TextField
                  label="Endereço"
                  name="street"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    required: false,
                  }}
                  onChange={(e) => handleChange(e, "enderecoRepresentante")}
                  value={form.enderecoRepresentante.street}
                  required
                  error={!!errors['enderecoRepresentante-street']}
                  helperText={errors['enderecoRepresentante-street']}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  label="Número"
                  name="streetNumber"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "enderecoRepresentante")}
                  value={form.enderecoRepresentante.streetNumber}
                  required
                  error={!!errors['enderecoRepresentante-streetNumber']}
                  helperText={errors['enderecoRepresentante-streetNumber']}
                  InputLabelProps={{
                    required: false,  
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  label="Complemento"
                  name="complemento"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "enderecoRepresentante")}
                  value={form.enderecoRepresentante.complemento}
                  InputLabelProps={{
                    required: false,  
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  label="Bairro"
                  name="bairro"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange(e, "enderecoRepresentante")}
                  value={form.enderecoRepresentante.bairro}
                  required
                  error={!!errors['enderecoRepresentante-bairro']}
                  helperText={errors['enderecoRepresentante-bairro']}
                  InputLabelProps={{
                    required: false,  
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  select
                  label="UF"
                  name="uf"
                  fullWidth
                  margin="normal"
                  value={form.enderecoRepresentante.uf}
                  onChange={(e) => handleChange(e, "enderecoRepresentante")}
                  required
                  error={!!errors['enderecoRepresentante-uf']}
                  helperText={errors['enderecoRepresentante-uf']}
                  InputLabelProps={{
                    required: false, 
                  }}
                >
                  {estadosBrasil.map((estado) => (
                    <MenuItem key={estado.sigla} value={estado.sigla}>
                      {estado.nome}
                    </MenuItem>
                  )
                  )
                  }
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 , md: 3 }}>
                <TextField
                  select
                  label="Cidade"
                  name="cidade"
                  fullWidth
                  margin="normal"
                  value={form.enderecoRepresentante.cidade}
                  onChange={(e) => handleChange(e, "enderecoRepresentante")}
                  required
                  error={!!errors['enderecoRepresentante-cidade']}
                  helperText={errors['enderecoRepresentante-cidade']}
                  disabled={!form.enderecoRepresentante.uf}
                  InputLabelProps={{
                    required: false,  
                  }}
                >
                  { (cidades.enderecoRepresentante || []).map((cidade) => (
                      <MenuItem key={cidade} value={cidade}>{cidade}</MenuItem>
                  ))}
                </TextField>
              </Grid>

            </Grid>

          </form>

        </Container>
        );
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      <Box style={{ 
        backgroundColor: "#003049",
        display: "flex",
        justifyContent: "space-between", // Isso coloca os itens nas extremidades
        alignItems: "center", // Isso centraliza verticalmente
        padding: "10px 20px"
      }}>
        <span><img src={WeesuLogo} style={{width: 150}}/></span>
        <span>
          <IconButton width="40" /*onClick={}*/ >
            <LoginIcon fontSize="large"/>
          </IconButton></span>        
      </Box>

      <Container maxWidth="lg" style={{marginTop: 20}} sx={{justifyContent: "center"}}>
        
        <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{paddingTop: 20}}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
          
        {renderStep()}

        <Grid container spacing={2} justifyContent="center" style={{ margin: 20 }}>
          
          {activeStep > 0 && (            
            <Button variant="contained" onClick={handleBack}>
              Voltar
            </Button>
          )}

          {activeStep < steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Próximo
            </Button>
          ) 
          
          : (
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Finalizar
            </Button>
          )}
          
        </Grid>

      </Container>
    </ThemeProvider>
  )
};

export default App;