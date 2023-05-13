import BluetoothSerial from 'react-native-bluetooth-serial';

export const getPairedDevices = async () => {
  return new Promise(async (resolve, reject) => {
    const isEnabled = await BluetoothSerial.isEnabled();
    if (!isEnabled) BluetoothSerial.requestEnable();

    try {
      const pairedDevices = await BluetoothSerial.list();

      resolve(pairedDevices);
    } catch (err) {
      reject(err);
    }
  });
};
