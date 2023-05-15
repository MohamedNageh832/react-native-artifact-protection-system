import BluetoothSerial from 'react-native-bluetooth-serial';
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {externalStyles} from './styles';
import {useConnections} from '../../../features/connections/context/ContectionsContext';
import {useModals} from '../../../features/modals';

export default function ConnectionState() {
  const {state, setValue} = useConnections();
  const {setShowAvailableDevicesModal} = useModals();
  const {isConnected} = state;
  const styles = externalStyles({isConnected});

  const handleConnect = () => {
    setShowAvailableDevicesModal(true);
  };

  const handleDisconnect = async () => {
    await BluetoothSerial.disconnect();
    setValue('isConnected', false);
  };

  return (
    <View style={styles.connection}>
      <Text style={styles.connectionLabel}>Connection state</Text>
      <Text style={styles.connectionState}>
        {isConnected ? 'Connected' : 'Disconnected'}
      </Text>
      {isConnected ? (
        <TouchableOpacity activeOpacity={0.8} onPress={handleDisconnect}>
          <Text style={[styles.connectionBtn, styles.connectionBtnDisconnect]}>
            Disconnect
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={0.8} onPress={handleConnect}>
          <Text style={[styles.connectionBtn, styles.connectionBtnConnect]}>
            Connect
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
