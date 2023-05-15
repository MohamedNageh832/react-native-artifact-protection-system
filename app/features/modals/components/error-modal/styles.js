import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../services/colors';

export const externalStyles = () => {
  return new StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 10,
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 20,
      fontWeight: 700,
      color: COLORS.red,
    },
    message: {
      marginVertical: 8,
      fontSize: 14,
    },
    closeBtn: {
      paddingVertical: 4,
      fontWeight: 700,
    },
  });
};
