import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../services/colors';

export const externalStyles = ({isFocused, error}) => {
  return new StyleSheet.create({
    modalControls: {
      flexDirection: 'row',
      columnGap: 16,
    },
    inputHolder: {
      marginBottom: 16,
    },
    formInput: {
      borderBottomWidth: 2,
      borderStyle: 'solid',
      borderColor: error
        ? COLORS.red
        : isFocused
        ? COLORS.darkGreen
        : COLORS.hairline,
      marginBottom: 8,
    },
    cancelBtn: {
      color: COLORS.secondary,
    },
  });
};
