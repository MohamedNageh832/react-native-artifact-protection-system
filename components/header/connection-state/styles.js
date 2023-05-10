import {StyleSheet} from 'react-native';
import {COLORS} from '../../../services/colors';

export const externalStyles = props => {
  const {isConnected} = props || {};

  return StyleSheet.create({
    connection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
    },
    connectionLabel: {
      color: '#ffffff',
    },
    connectionState: {
      color: isConnected ? COLORS.green : COLORS.lightRed,
      fontWeight: 700,
    },
    connectionBtn: {
      paddingVertical: 4,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: isConnected ? COLORS.lightRed : COLORS.green,
      borderRadius: 20,
      color: '#ffffff',
      fontSize: 12,
    },
  });
};
