/**
 * Created by alexcatalisan on 08.11.2017.
 */

export const validatorManager = {
    applyValidators(currentValue, validators) {
        const errors = [];
        validators.each((validator) => {
            if (![validator.type](currentValue, validator.value))
                errors.push({'error': validator.purpose});
        });
        return errors;
    },
}

function regex(value, regexExpression) {
    if (regexExpression.test(value)) return true;
    return false;
}

function fileType(value, expectedType) {
    return {};
}