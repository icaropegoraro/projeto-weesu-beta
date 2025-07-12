export const cnaeValidator = (value)=> {
    const cleaned = value.replace(/\D/g, '')

    if (cleaned.length !== 7) return 'CNAE deve conter 7 dígitos numéricos'

    return true
}