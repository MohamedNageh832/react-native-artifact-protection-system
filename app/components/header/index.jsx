import BluetoothSerial from 'react-native-bluetooth-serial';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import headerImg from '../../assets/images/home-background.jpg';
import {externalStyles} from './styles';
import ConnectionState from './connection-state';
import Tempreture from './tempreture';
import Controls from './controls';
import {useEffect} from 'react';
import {useConnections} from '../../features/connections/context/ContectionsContext';
import {useModals} from '../../features/modals';

export default function Header() {
  const {setValue} = useConnections();
  const {setShowErrorModal, setShowAvailableDevicesModal} = useModals();
  const styles = externalStyles();

  useEffect(() => {
    BluetoothSerial.withDelimiter('\r').then(() => {
      BluetoothSerial.on('read', msg => {
        const {data} = msg;
        if (data.includes('temp')) {
          const processedData = data.slice(0, data.length - 2);
          const [identifier, value] = processedData.split(':');

          if (identifier.trim().toLowerCase().includes('temp')) {
            setValue('tempreture', value);
          }
        }
        console.log(data);
      });
    });

    const handleBluetoothDisabled = () => {
      setShowErrorModal(true, {
        title: 'Bluetooth disabled',
        messages: ['You must enable bluetooth to use this app!'],
      });

      setShowAvailableDevicesModal(true);
    };

    BluetoothSerial.on('bluetoothDisabled', handleBluetoothDisabled);

    return () =>
      BluetoothSerial.removeListener(
        'bluetoothDisabled',
        handleBluetoothDisabled,
      );
  }, []);

  return (
    <View>
      <ImageBackground source={headerImg} style={styles.header}>
        <View style={styles.overlay}>
          <View>
            <Text style={styles.title}>Artifact Protection</Text>
            <ConnectionState />
          </View>
          <Tempreture />
          <Controls />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
