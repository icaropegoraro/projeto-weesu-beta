export const maskHandler = (mask, ...args) => (event, onChange) => {
  const maskedValue = mask(event.target.value, ...args)
  onChange(maskedValue)
}