import BluetoothSerial from 'react-native-bluetooth-serial';

export function getAvailableDevices() {
  return new Promise(async (resolve, reject) => {
    const isEnabled = await BluetoothSerial.isEnabled();
    if (!isEnabled) await BluetoothSerial.requestEnable();

    try {
      const availableDevices = await BluetoothSerial.discoverUnpairedDevices();

      resolve(availableDevices);
    } catch (err) {
      reject(err);
    }
  });
}
