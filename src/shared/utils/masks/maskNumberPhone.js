export const maskNumberPhone = (value) => {
    
    if (!value) return ''

    let numberPhone = value.replace(/\D/g, '')

    if (numberPhone.length > 13) numberPhone = numberPhone.slice(0,13)

    let numberPhoneMasked = ''

    if (numberPhone.length > 0) numberPhoneMasked = '+' + numberPhone.slice(0,2)
    if (numberPhone.length > 2) numberPhoneMasked += ' (' + numberPhone.slice(2,4)
    if (numberPhone.length > 4) numberPhoneMasked += ') ' + numberPhone.slice(4,8)
    if (numberPhone.length > 8) numberPhoneMasked += '-' + numberPhone.slice(8,12)
    if (numberPhone.length > 12) numberPhoneMasked = `+${numberPhone.slice(0,2)} (${numberPhone.slice(2,4)}) ${numberPhone.slice(4,9)}-${numberPhone.slice(9,13)}`

    value = numberPhoneMasked

    return value

}