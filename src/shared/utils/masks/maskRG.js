export const maskRG = (value) => {
    
    if (!value) return ''
    
    let rg = value.replace(/\D/g, '')

    if (rg.length > 9) rg = rg.slice (0,9);

    let rgMasked = ''

    if (rg.length> 0) rgMasked += rg.slice(0,2);
    if (rg.length > 2) rgMasked += '.' + rg.slice(2,5);
    if (rg.length > 5) rgMasked += '.' + rg.slice(5,8);
    if (rg.length > 8) rgMasked += '-' + rg.slice(8,9);
    
    value = rgMasked

    return value
}