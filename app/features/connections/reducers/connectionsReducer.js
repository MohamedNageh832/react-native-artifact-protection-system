import {ACTIONS} from '../actions/connectionsActions';

export const intialState = {
  tempreture: 0,
  warningTempreture: 30,
  dangerTempreture: 40,
  tempretureState: 'safe',
  isConnected: false,
  discovering: false,
  availableDevices: null,
  pairedDevices: null,
  connectedDevice: null,
};

export const reducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case ACTIONS.SET_CONNECTION:
      return {...state, isConnected: payload.isConnected};
    case ACTIONS.SET_VALUE:
      return {...state, ...payload};
    case ACTIONS.SET_VALUES:
      return {...state, ...payload};
    default:
      throw Error(`Unhandled action type: "${type}"`);
  }
};
