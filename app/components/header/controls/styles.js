import {StyleSheet} from 'react-native';
import {COLORS} from '../../../services/colors';

export const externalStyles = () => {
  return StyleSheet.create({
    controls: {
      flexDirection: 'row',
      gap: 16,
    },
    controlsBtn: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 20,
    },
    disableSecurityBtn: {
      backgroundColor: COLORS.red,
      color: '#ffffff',
      borderColor: COLORS.red,
    },
    changePasswordBtn: {
      color: '#ffffff',
      borderColor: '#ffffff',
    },
  });
};
