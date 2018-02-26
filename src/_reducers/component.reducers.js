import { ComponentConst } from '../_constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case ComponentConst.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case ComponentConst.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case ComponentConst.CLEAR:
      return {};
    default:
      return state
  }
}