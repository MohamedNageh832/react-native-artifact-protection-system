import {StyleSheet} from 'react-native';
import {COLORS} from '../../services/colors';

export const externalStyles = ({overlay}) => {
  return new StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: overlay ? COLORS.overlayBg : null,
    },
  });
};
