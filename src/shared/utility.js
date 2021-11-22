export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
};

export const checkValidity = (value, rules) => {
    let isValid = true;
    if(rules.isEmpty) {
        isValid = value.trim() !== '' && isValid;
    }
    if(rules.isPositive) {
        isValid = parseFloat(value) > 0 && isValid;
    }
    return isValid;
}
