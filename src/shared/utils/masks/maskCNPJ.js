export const maskCNPJ = (value) => {

    if (!value) return ''

    let cnpj = value.replace(/\D/g, '')

    if (cnpj.length > 14) cnpj = cnpj.slice(0, 14)

    let cnpjMasked = ''

    if (cnpj.length > 0) cnpjMasked = cnpj.slice(0, 2)
    if (cnpj.length > 2) cnpjMasked += '.' + cnpj.slice(2, 5)
    if (cnpj.length > 5) cnpjMasked += '.' + cnpj.slice(5, 8)
    if (cnpj.length > 8) cnpjMasked += '/' + cnpj.slice(8, 12)
    if (cnpj.length > 12) cnpjMasked += '-' + cnpj.slice(12,14)
 
    value = cnpjMasked

    return value
}

