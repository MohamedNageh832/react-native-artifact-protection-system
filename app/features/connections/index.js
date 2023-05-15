import ConnectionsProvider from './context/ContectionsContext';
import {getAvailableDevices} from '../modals/components/available-devices-modal/utils/getAvailbleDevices';
import {requestBluetoothPermission} from '../modals/components/available-devices-modal/utils/requestBluetoothPermission';

export {ConnectionsProvider, requestBluetoothPermission, getAvailableDevices};
