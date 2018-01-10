/**
 * Created by alexcatalisan on 03.11.2017.
 */

import { validatorManager } from '../utils/validatorManager';

/**
 * Generic onChange hook that will update/throw corresponding errors when the target is changed
 * @param {currentValue} current value of the input 
 * @param {ownProps} props before the change event was trigger
 * @param {behaviour} validators and actions that will trigger on success/error 
 */
export function onChange(currentValue, ownProps, behaviour) {
    const { id, dispatch } = ownProps;
    const { validators, actions } = behaviour;
    const isComponentValid = validatorManager.applyValidators(currentValue, validators);
    if (isComponentValid === true) {
        console.log(currentValue)
        return;
    }
}

/**
 * TODO: Generic onBlur hook that will update/throw corresponding errors when the target is changed
 * @param {currentValue} current value of the input 
 * @param {ownProps} props before the change event was trigger
 * @param {behaviour} validators and actions that will trigger on success/error 
 */
export function onBlur(currentValue, ownProps, behaviour) {
    return;
}