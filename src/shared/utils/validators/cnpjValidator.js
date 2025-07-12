export const cnpjValidator = (value) => {

    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length !== 14) return 'CNPJ deve conter 14 dígitos'

    const calcCheckDigit = (cnpj, multipliers) => {
        const sum = cnpj
        .split('')
        .map((num, idx) => parseInt(num) * multipliers[idx])
        .reduce((acc, curr) => acc + curr, 0)

        const remainder = sum % 11
        return remainder < 2 ? 0 : 11 - remainder
    }

    const base = cleaned.slice(0, 12)
    const digits = cleaned.slice(12)

    const firstMultiplier = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    const secondMultiplier = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

    const firstDigit = calcCheckDigit(base, firstMultiplier)
    const secondDigit = calcCheckDigit(base + firstDigit, secondMultiplier)

    if (
        firstDigit !== parseInt(digits[0]) ||
        secondDigit !== parseInt(digits[1])
    ) {
        return 'CNPJ inválido'
    }

    return true
}