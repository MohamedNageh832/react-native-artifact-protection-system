export const enableBluetoothAndRefresh = async () => {
  try {
    await BluetoothSerial.enable();
    setTimeout(() => {
      getPairedDevices();
    }, 1000);
  } catch (e) {
    console.log(e);
  }
};

const getPairedDevices = async () => {
  try {
    const pairedDeviceses = await BluetoothSerial.list();
    return pairedDeviceses;
    /*
      const d = {
        address: '20:16:10:09:45:18',
        class: '7936',
        id: '20:16:10:09:45:18',
        name: 'HC-05',
      };
      connectToDevice(d);
      */
  } catch (e) {
    console.log(e);
  }
};
