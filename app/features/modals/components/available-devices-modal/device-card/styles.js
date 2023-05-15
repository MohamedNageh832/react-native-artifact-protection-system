import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../services/colors';

export const externalStyles = () => {
  return new StyleSheet.create({
    container: {
      paddingVertical: 4,
    },
    name: {
      fontSize: 16,
      color: '#000000',
    },
    address: {
      fontSize: 14,
      color: COLORS.secondary,
    },
  });
};
