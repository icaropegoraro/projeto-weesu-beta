export const maskMoney = (value) => {

    if (!value) return ''

    let money = value.replace(/\D/g, '')

    let moneyMasked = Number(money) / 100

    value = moneyMasked.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return value
}