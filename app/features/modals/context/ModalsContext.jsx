import {createContext, useContext, useReducer} from 'react';
import {intialState, reducer} from '../reducers/modalsReducer';
import {ACTIONS} from '../actions/modalActions';

const ModalsContext = createContext(intialState);

export default function ModalsProvider({children}) {
  const [state, dispatch] = useReducer(reducer, intialState);

  const setShowLoadingModal = show => {
    const payload = {show};

    dispatch({type: ACTIONS.SET_SHOW_LOADING_MODAL, payload});
  };

  const setShowSuccessModal = (show, config) => {
    const {title, messages} = config || {};

    const payload = {show, title, messages};

    dispatch({type: ACTIONS.SET_SHOW_SUCCESS_MODAL, payload});
  };

  const setShowAvailableDevicesModal = show => {
    const payload = {show};

    dispatch({type: ACTIONS.SET_SHOW_AVAILABLE_DEVICES_MODAL, payload});
  };

  const setShowDisableSecurityModal = show => {
    const payload = {show};

    dispatch({type: ACTIONS.SET_SHOW_DISABLE_SECURITY_MODAL, payload});
  };

  const setShowErrorModal = (show, config) => {
    const {title, messages} = config || {};

    const payload = {show, title, messages};

    dispatch({type: ACTIONS.SET_SHOW_ERROR_MODAL, payload});
  };

  const contextValues = {
    state,
    setShowLoadingModal,
    setShowSuccessModal,
    setShowErrorModal,
    setShowAvailableDevicesModal,
    setShowDisableSecurityModal,
  };

  return (
    <ModalsContext.Provider value={contextValues}>
      {children}
    </ModalsContext.Provider>
  );
}

export const useModals = () => {
  const context = useContext(ModalsContext);

  if (!context) throw Error('Make sure you provided the values');

  return context;
};
