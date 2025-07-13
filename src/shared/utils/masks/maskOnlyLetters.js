export const maskOnlyLetters = (value, length) => {

  if (!value) return ''

  let text = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '')

  if (text.length > length) text = text.slice(0, length)

  value = text

  return value
}