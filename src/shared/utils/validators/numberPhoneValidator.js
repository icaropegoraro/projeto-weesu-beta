export const numberPhoneValidator = (value)=> {

    const cleaned = value.replace(/\D/g, '')

    const isValidLength = (cleaned.length === 12 || cleaned.length === 13)

    if (!isValidLength) {
        return 'Telefone deve conter 10 ou 11 dígitos'
    }

  return true
}