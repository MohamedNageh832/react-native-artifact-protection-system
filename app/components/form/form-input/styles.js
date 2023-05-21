import {StyleSheet} from 'react-native';
import {COLORS} from '../../../services/colors';

export const externalStyles = ({isPending, errorMessage}) => {
  return new StyleSheet.create({
    container: {
      position: 'relative',
      justifyContent: 'center',
    },
    input: {
      padding: 4,
      fontSize: 14,
      color: isPending ? COLORS.secondary : '#000000',
    },
    activityIndicator: {
      position: 'absolute',
      end: 8,
      top: 8,
    },
    errorMessage: {
      color: COLORS.red,
      fontSize: 14,
    },
  });
};
