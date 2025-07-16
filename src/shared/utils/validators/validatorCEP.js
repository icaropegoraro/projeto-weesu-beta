export const validatorCEP = (value) => {
  const cleaned = value.replace(/\D/g, '')

  if (cleaned.length !== 8) return 'CEP deve conter 8 dígitos numéricos'

  return true
}