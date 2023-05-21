import {COLORS} from '../../../../services/colors';

const {StyleSheet} = require('react-native');

export const externalStyles = () => {
  return new StyleSheet.create({
    title: {
      color: COLORS.darkGreen,
    },
  });
};
