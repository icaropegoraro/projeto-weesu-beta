export const validatorEmail = (value) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(value)) {
        return 'E-mail inválido'
    }

    return true
}