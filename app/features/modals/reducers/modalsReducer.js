import {ACTIONS} from '../actions/modalActions';

export const intialState = {
  loadingModal: {show: false},
  errorModal: {show: false, title: 'Error!', messages: ['An error occured']},
  successModal: {
    show: false,
    title: 'Success',
    messages: ['Processed successfully'],
  },
  availableDevicesModal: {show: true},
  disableSecurityModal: {show: true},
};

export const reducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case ACTIONS.SET_SHOW_LOADING_MODAL:
      const loadingModal = {...payload};
      return {...state, loadingModal};
    case ACTIONS.SET_SHOW_ERROR_MODAL:
      const errorModal = {...payload};
      return {...state, errorModal};
    case ACTIONS.SET_SHOW_SUCCESS_MODAL:
      const successModal = {...payload};
      return {...state, successModal};
    case ACTIONS.SET_SHOW_AVAILABLE_DEVICES_MODAL:
      const availableDevicesModal = {...payload};
      return {...state, availableDevicesModal};
    case ACTIONS.SET_SHOW_DISABLE_SECURITY_MODAL:
      const disableSecurityModal = {...payload};
      return {...state, disableSecurityModal};
    default:
      throw Error(`Unhandled action type: "${type}"`);
  }
};
