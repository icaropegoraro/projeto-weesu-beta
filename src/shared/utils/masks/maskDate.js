export const maskDate = (value) => {

    if (!value) return ''

    let date = value.replace(/\D/g, '')

    if (date.length > 8) date = date.slice(0, 8)

    let dateMasked = ''

    if (date.length > 0) dateMasked = date.slice(0, 2)
    if (date.length > 2) dateMasked += '/' + date.slice(2, 4)
    if (date.length > 4) dateMasked += '/' + date.slice(4, 8)

    value = dateMasked

    return value
}