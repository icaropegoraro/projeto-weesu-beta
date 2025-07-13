const TextFieldRefs = {}

export const getRefs = (name) => {
    if (!TextFieldRefs[name]) {
        TextFieldRefs[name] = {
        ref: null
        }
    }

    return (el) => {
        TextFieldRefs[name].ref = el
    }
}

export const getRefValue = (name) => {

    return TextFieldRefs[name]?.ref

}