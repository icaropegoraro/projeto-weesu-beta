export const handleEnterKeyPress = (event, nextRef) => {
    if (event.key !== 'Enter') return;

    event.preventDefault()

    const input = nextRef?.current || nextRef
    input?.focus?.()
}