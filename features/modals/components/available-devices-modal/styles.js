import {COLORS} from '../../../../services/colors';

const {StyleSheet} = require('react-native');

export const externalStyles = () => {
  return StyleSheet.create({
    container: {
      width: '90%',
      maxHeight: '90%',
      padding: 16,
      borderRadius: 10,
      backgroundColor: '#ffffff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    title: {
      fontSize: 20,
      fontWeight: 700,
      color: '#000000',
    },
    refreshBtn: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: COLORS.secondary,
      borderRadius: 20,
      fontSize: 12,
    },
    subTitle: {
      fontSize: 14,
      marginTop: 8,
    },
    pairedDevices: {
      gap: 4,
    },
    text: {
      paddingVertical: 8,
      color: '#000000',
    },
    separator: {
      width: '100%',
      height: 1,
      marginVertical: 8,
      backgroundColor: COLORS.hairline,
    },
  });
};
