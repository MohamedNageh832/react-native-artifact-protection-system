import {StyleSheet} from 'react-native';
import {COLORS} from '../../services/colors';

export const externalStyles = () => {
  return new StyleSheet.create({
    loader: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 2,
      backgroundColor: COLORS.overlayBgWhite,
    },
  });
};
