import {BackHandler, PermissionsAndroid, Platform} from 'react-native';

export async function requestBluetoothPermission() {
  try {
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      let finalPermission =
        Platform.Version >= 29
          ? PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          : PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION;

      const granted = await PermissionsAndroid.check(finalPermission);

      if (!granted) {
        const result = await PermissionsAndroid.request(finalPermission);

        return {granted: result};
      }

      return {granted};
    }
  } catch (err) {
    BackHandler.exitApp();
  }
}
