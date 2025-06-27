export const maskCNAE = (value) => {

    if (!value) return ''

    let cnae = value.replace(/\D/g, '')

    if (cnae.length > 7) cnae = cnae.slice(0, 7)

    let cnaeMasked = ''

    if (cnae.length > 0) cnaeMasked = cnae.slice(0, 2)
    if (cnae.length > 2) cnaeMasked += '.' + cnae.slice(2, 4)
    if (cnae.length > 4) cnaeMasked += '-' + cnae.slice(4, 5)
    if (cnae.length > 5) cnaeMasked += '-' + cnae.slice(5, 7)

    value = cnaeMasked

    return value
}