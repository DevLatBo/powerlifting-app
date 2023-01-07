export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
};

export const getValueInput = (event, type) => {
    let value = null;
    if(type === "number") {
        value = parseFloat(event.target.value);
    }
    if(type === "checkbox") {
        value = event.target.checked;
    }
    return value;
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

export const obtainMovementName = (movement) => {
    const movements = [];
    movements['bench-press'] = 'Press de Banca';
    movements['deadlift'] = 'Peso Muerto';
    movements['squat'] = 'Sentadilla';

    let res = movements[movement].toUpperCase();
    return res;
};