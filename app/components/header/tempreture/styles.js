import {StyleSheet} from 'react-native';
import {COLORS} from '../../../services/colors';
import {STATE_COLORS} from './constants';

export const externalStyles = props => {
  const {tempretureState} = props || {};

  const commonTextStyles = {
    color: STATE_COLORS[tempretureState],
    fontSize: 24,
    fontWeight: 700,
  };

  return StyleSheet.create({
    tempreture: {
      flexDirection: 'row',
      gap: 16,
      marginVertical: 20,
    },
    tempretureValue: {...commonTextStyles},
    tempretureMessage: {
      ...commonTextStyles,
    },
  });
};
