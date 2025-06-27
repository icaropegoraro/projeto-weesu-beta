export const maskHandler = (mask) => (event, onChange)  => {
    const maskedValue = mask(event.target.value)
    onChange(maskedValue)
}