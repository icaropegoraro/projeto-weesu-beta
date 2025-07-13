export const maskOnlyNumbers = (value, length) => {
    
    if (!value) return ''

    let number = value.replace(/\D/g, '')

    if (number.length > length) number = number.slice(0, length)

    value = number

    return value

}