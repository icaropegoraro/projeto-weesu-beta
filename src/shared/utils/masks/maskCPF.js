export const maskCPF = (value) => {

    if (!value) return ''

    let cpf = value.replace(/\D/g, '')

    if (cpf.length > 11) cpf = cpf.slice(0, 11)

    let cpfMasked = ''

    if (cpf.length > 0) cpfMasked = cpf.slice(0, 3)
    if (cpf.length > 3) cpfMasked += '.' + cpf.slice(3, 6)
    if (cpf.length > 6) cpfMasked += '.' + cpf.slice(6, 9)
    if (cpf.length > 9) cpfMasked += '-' + cpf.slice(9, 11)

    value = cpfMasked

    return value
}