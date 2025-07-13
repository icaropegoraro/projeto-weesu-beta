import dayjs from 'dayjs'

export const pastOrTodayDateValidator = (value) => {

    const date = dayjs(value)
    if (!date.isValid()) return 'Data inválida'

    const today = dayjs().startOf('day')

    if (date.isAfter(today)) {
        return 'A data não pode ser no futuro'
    }

    return true
}