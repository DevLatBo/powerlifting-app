export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
};

export const getValueInput = (event, type) => {
    let res = null;
    if(type === "number") {
        const value = (event.target.value === null  || event.target.value === "") ? 0 : event.target.value;
        res = parseFloat(value);
        
    }
    if(type === "checkbox") {
        res = event.target.checked;
    }
    return res;
};

export const checkValidity = (value, rules) => {
    let isValid = true;
    if(rules.isEmpty) {
        isValid = value.length !== 0 && isValid;
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