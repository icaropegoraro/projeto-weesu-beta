export const cpfValidator = (value) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length !== 11) return 'CPF deve conter 11 dígitos'

    const calcCheckDigit = (cpf, factor) => {
        const total = cpf
        .split('')
        .map((num, idx) => parseInt(num) * (factor - idx))
        .reduce((acc, curr) => acc + curr, 0)

        const remainder = total % 11
        return remainder < 2 ? 0 : 11 - remainder
    }

    const base = cleaned.slice(0, 9)
    const digit1 = calcCheckDigit(base, 10)
    const digit2 = calcCheckDigit(base + digit1, 11)

    if (
        digit1 !== parseInt(cleaned[9]) ||
        digit2 !== parseInt(cleaned[10])
    ) {
        return 'CPF inválido'
    }

    return true
}