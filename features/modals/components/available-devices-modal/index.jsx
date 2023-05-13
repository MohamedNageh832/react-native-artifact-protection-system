import {
  ActivityIndicator,
  PermissionsAndroid,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {useModals} from '../../context/ModalsContext';
import {externalStyles} from './styles';
import {PositionCenter} from '../../../../components';
import DeviceCard from './device-card';
import {useEffect} from 'react';
import {requestBluetoothPermission} from './utils/requestBluetoothPermission';
import {getAvailableDevices} from './utils/getAvailbleDevices';
import {useConnections} from '../../../connections/context/ContectionsContext';
import {getPairedDevices} from './utils/getPairedDevices';

const AvailableDevicesModal = () => {
  const {setShowAvailableDevicesModal, setShowLoadingModal} = useModals();
  const {state: connectionsState, setValue, setValues} = useConnections();
  const {discovering, isConnected, pairedDevices, availableDevices} =
    connectionsState;
  const styles = externalStyles();

  const hideModal = () => setShowAvailableDevicesModal(false);

  const setupConnection = async () => {
    const permmission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    const granted = permmission
      ? permmission
      : await requestBluetoothPermission();

    if (!granted || discovering) return;

    setValue('discovering', true);
    const pairedDevices = await getPairedDevices();
    setValue('pairedDevices', pairedDevices);

    const availableDevices = await getAvailableDevices();
    setValue('availableDevices', availableDevices);

    setValue('discovering', false);
  };

  useEffect(() => {
    setShowLoadingModal(true);
    setupConnection();
    setShowLoadingModal(false);
  }, []);

  return (
    <PositionCenter onPress={hideModal} overlay>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Connect to device</Text>
          {discovering ? (
            <ActivityIndicator style={styles.headerSpinner} />
          ) : (
            <TouchableOpacity activeOpacity={0.8} onPress={setupConnection}>
              <Text style={styles.refreshBtn}>Refresh</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.pairedDevices}>
          <Text style={styles.subTitle}>
            Paired devices: {pairedDevices && pairedDevices.length}
          </Text>
          {pairedDevices && pairedDevices.length > 0 ? (
            pairedDevices.map((device, i) => (
              <DeviceCard key={`device${i}`} data={device} />
            ))
          ) : (
            <Text style={styles.text}>No devices available.</Text>
          )}
        </View>
        <View style={styles.separator}></View>
        <Text style={styles.subTitle}>
          Available devices: {availableDevices && availableDevices.length}
        </Text>
        {availableDevices && availableDevices.length > 0 ? (
          availableDevices.map((device, i) => (
            <DeviceCard key={`avail-device${i}`} data={device} />
          ))
        ) : (
          <Text style={styles.text}>No devices available.</Text>
        )}
      </ScrollView>
    </PositionCenter>
  );
};

export default AvailableDevicesModal;
