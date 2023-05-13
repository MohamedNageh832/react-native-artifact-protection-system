import {createContext, useContext, useReducer} from 'react';
import {intialState, reducer} from '../reducers/connectionsReducer';
import {ACTIONS} from '../actions/connectionsActions';

const ConnectionsContext = createContext(intialState);

export default function ConnectionsProvider({children}) {
  const [state, dispatch] = useReducer(reducer, intialState);

  const setConnection = isConnected => {
    dispatch({type: ACTIONS.SET_CONNECTION, payload: {isConnected}});
  };

  const setValue = (name, value) => {
    const payload = {[name]: value};

    dispatch({type: ACTIONS.SET_VALUE, payload});
  };

  const setValues = obj => {
    const payload = obj;

    dispatch({type: ACTIONS.SET_VALUES, payload});
  };

  const contextValues = {
    state,
    setValue,
    setValues,
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
