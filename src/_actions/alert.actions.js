import { ComponentConst } from '../_constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: ComponentConst.SUCCESS, message };
}

function error(message) {
    return { type: ComponentConst.ERROR, message };
}

function clear() {
    return { type: ComponentConst.CLEAR };
}