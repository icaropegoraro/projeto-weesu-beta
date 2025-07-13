export const rgValidator = (value) => {
  const cleaned = value.replace(/\D/g, '')

  if (cleaned.length !== 9) return 'RG deve conter exatamente 9 dígitos numéricos'

  return true
}