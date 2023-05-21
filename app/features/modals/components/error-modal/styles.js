import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../services/colors';

export const externalStyles = () => {
  return new StyleSheet.create({
    title: {
      color: COLORS.red,
    },
  });
};
