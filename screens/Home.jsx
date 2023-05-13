import {SafeAreaView} from 'react-native';
import {Header, ComponentsState} from '../components';
import {SuccessModal, useModals} from '../features/modals';
import AvailableDevicesModal from '../features/modals/components/available-devices-modal';
import LoaderScreen from '../components/loader-screen';
import {useMemo} from 'react';

const Home = () => {
  const {state} = useModals();

  const renderLoadingModal = useMemo(() => <LoaderScreen />, []);
  const renderAvailableDevicesModal = useMemo(
    () => <AvailableDevicesModal />,
    [],
  );
  const renderSuccessModal = useMemo(() => <SuccessModal />, []);

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <Header />
      <ComponentsState />
      {state.availableDevicesModal.show && renderAvailableDevicesModal}
      {state.loadingModal.show && renderLoadingModal}
      {state.successModal.show && renderSuccessModal}
    </SafeAreaView>
  );
};

export default Home;
