import {COLORS} from '../../../../services/colors';

const {StyleSheet} = require('react-native');

export const externalStyles = () => {
  return new StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 10,
      backgroundColor: '#ffffff',
      zIndex: 3,
    },
    title: {
      color: COLORS.darkGreen,
      fontSize: 16,
      fontWeight: 700,
    },
    message: {fontSize: 14},
  });
};
