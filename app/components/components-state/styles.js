import {StyleSheet} from 'react-native';
import {COLORS} from '../../services/colors';

export const externalStyles = props => {
  const {isConnected} = props || {};

  return StyleSheet.create({
    container: {
      padding: 16,
      gap: 12,
      flexGrow: 0,
    },
    title: {
      color: '#000000',
      fontWeight: 700,
      fontSize: 16,
    },
    scrollView: {
      flexGrow: 1,
    },
    componentsList: {
      gap: 16,
    },
  });
};
