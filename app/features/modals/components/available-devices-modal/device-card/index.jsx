import BluetoothSerial from 'react-native-bluetooth-serial';
import {Text, TouchableOpacity} from 'react-native';
import {externalStyles} from './styles';
import {useModals} from '../../../context/ModalsContext';
import {useConnections} from '../../../../connections/context/ContectionsContext';
import {pairAndConnect} from '../utils/pairAndConnect';
import {useEffect} from 'react';

const DeviceCard = ({data}) => {
  const {state, setValue} = useConnections();
  const {pairedDevices} = state;
  const {
    setShowSuccessModal,
    setShowLoadingModal,
    setShowErrorModal,
    setShowAvailableDevicesModal,
  } = useModals();
  const {name, address, id} = data || {};
  const styles = externalStyles();

  useEffect(() => {
    const handleConnectionLoss = () => {
      setValue('isConnected', false);

      setShowErrorModal(true, {
        title: 'Connection lost!',
        messages: [
          'Connection was lost please make sure you are within a proper range and retry again',
        ],
      });

      setShowAvailableDevicesModal(true);
    };

    BluetoothSerial.on('connectionLost', handleConnectionLoss);

    return async () => {
      try {
        await BluetoothSerial.removeListener(
          'connectionLost',
          handleConnectionLoss,
        );
      } catch (err) {}
    };
  }, []);

  const handlePress = async () => {
    setShowLoadingModal(true);

    try {
      const connected = pairedDevices.find(device => device.id === id)
        ? await BluetoothSerial.connect(id)
        : await pairAndConnect(id);

      if (connected) {
        setShowSuccessModal(true, {
          title: 'Successfully Connected',
          messages: [`Connected to ${name} device`],
        });

        setValue('isConnected', true);
        setShowAvailableDevicesModal(false);

        BluetoothSerial.write('Connected');

        const timeout = setTimeout(() => {
          setShowSuccessModal(false);
          clearTimeout(timeout);
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      setShowErrorModal(true, {
        title: "Can't connect to device!",
        messages: ['Connection failed please try again!'],
      });
    }

    setShowLoadingModal(false);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={handlePress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
    </TouchableOpacity>
  );
};

export default DeviceCard;
