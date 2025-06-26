export const maskCEP = (value) => {

    if (!value) return ''

    let cep = value.replace(/\D/g, '')

    if (cep.length > 8) cep = cep.slice(0, 8)

    let cepMasked = ''

    if (cep.length > 0) cepMasked = cep.slice(0, 5)
    if (cep.length > 5) cepMasked += '-' + cep.slice(5,8)
 
    value = cepMasked

    return value
}
