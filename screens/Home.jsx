import {SafeAreaView} from 'react-native';
import {Header, ComponentsState, LoaderScreen} from '../components';
import {
  ErrorModal,
  SuccessModal,
  useModals,
  AvailableDevicesModal,
} from '../features/modals';
import {useMemo} from 'react';

const Home = () => {
  const {state} = useModals();

  const renderLoadingModal = useMemo(() => <LoaderScreen />, []);
  const renderAvailableDevicesModal = useMemo(
    () => <AvailableDevicesModal />,
    [],
  );
  const renderSuccessModal = useMemo(() => <SuccessModal />, []);
  const renderErrorModal = useMemo(() => <ErrorModal />, []);

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <Header />
      <ComponentsState />
      {state.availableDevicesModal.show && renderAvailableDevicesModal}
      {state.loadingModal.show && renderLoadingModal}
      {state.successModal.show && renderSuccessModal}
      {state.errorModal.show && renderErrorModal}
    </SafeAreaView>
  );
};

export default Home;
