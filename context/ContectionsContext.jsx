import {createContext, useContext, useReducer} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {intialState, reducer} from '../reducers/connectionsReducer';

const ConnectionsContext = createContext(intialState);

export default function ConnectionsProvider({children}) {
  const [state, dispatch] = useReducer(reducer, intialState);

  const setConnection = isConnected => {
    dispatch({type: ACTIONS.SET_CONNECTION, payload: {isConnected}});
  };

  const contextValues = {
    state,
    setConnection,
  };

  return (
    <ConnectionsContext.Provider value={contextValues}>
      {children}
    </ConnectionsContext.Provider>
  );
}

export const useConnections = () => {
  const context = useContext(ConnectionsContext);

  if (!context) throw Error('Make sure you provided the values');

  return context;
};
