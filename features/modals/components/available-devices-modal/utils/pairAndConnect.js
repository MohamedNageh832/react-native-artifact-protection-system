import BluetoothSerial from 'react-native-bluetooth-serial';

export const pairAndConnect = async deviceId => {
  const paired = await BluetoothSerial.pairDevice(deviceId);

  if (paired) return false;

  const connected = await BluetoothSerial.connect(deviceId);

  return connected;
};
