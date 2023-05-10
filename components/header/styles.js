import {StyleSheet} from 'react-native';
import {COLORS} from '../../services/colors';

export const externalStyles = props => {
  const {isConnected} = props || {};

  return StyleSheet.create({
    overlay: {
      gap: 20,
      width: '100%',
      height: '100%',
      paddingHorizontal: 16,
      paddingVertical: 32,
      backgroundColor: 'rgba(0, 0, 54, 0.7)',
      color: '#ffffff',
    },
    header: {
      height: 300,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      overflow: 'hidden',
    },
    title: {
      color: '#ffffff',
      fontSize: 32,
    },
  });
};
