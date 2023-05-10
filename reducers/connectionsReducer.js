export const intialState = {
  tempreture: '0',
  tempretureState: 'safe',
  isConnected: false,
};

export const reducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case ACTIONS.SET_CONNECTION:
      return {...state, isConnected: payload.isConnected};
    default:
      throw Error(`Unhandled action type: "${type}"`);
  }
};
