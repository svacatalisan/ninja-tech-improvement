/**
 * Created by alexcatalisan on 10.01.2018.
 */

import { submit } from './dataActions/actions';
import { attachErrorsOnField } from './errorActions/actions';
import { toggleComponent } from './interactionsActions/actions';

export const actions = {
    dataActions: {
        submit: submit
    },
    errorActions: {
        attachErrorsOnField: attachErrorsOnField
    },
    interactionActions: {
        toggleComponent: toggleComponent
    }
};