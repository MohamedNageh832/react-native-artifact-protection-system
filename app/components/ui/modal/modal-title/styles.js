import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../services/colors';

export const externalStyles = () => {
  return new StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 700,
      color: '#000000',
    },
    subTitle: {
      fontSize: 14,
      color: COLORS.secondary,
    },
  });
};
