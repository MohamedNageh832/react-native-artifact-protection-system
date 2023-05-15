import {StyleSheet} from 'react-native';

export const externalStyles = () => {
  return StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      padding: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
    },
    image: {
      width: 40,
      height: 40,
    },
    text: {
      color: '#000000',
      fontSize: 16,
    },
  });
};
