/**
 * Created by alexcatalisan on 03.11.2017.
 */

import { validatorManager } from '../utils/validatorManager';

export function onChange(currentValue) {
    // perform validations based on config
    debugger;
    const isComponentValid = validatorManager.applyValidators(currentValue)
        // perform corresponding actions based on validation results
    return {};
}