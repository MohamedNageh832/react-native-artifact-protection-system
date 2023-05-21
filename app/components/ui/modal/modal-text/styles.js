import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../services/colors';

export const externalStyles = () => {
  return new StyleSheet.create({
    text: {
      marginVertical: 8,
      color: COLORS.secondary,
      fontSize: 14,
    },
  });
};
