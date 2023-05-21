import {StyleSheet, View} from 'react-native';
import PositionCenter from '../../position-center';

const Modal = ({children}) => {
  return (
    <PositionCenter overlay>
      <View style={styles.container}>{children}</View>
    </PositionCenter>
  );
};

export default Modal;

const styles = new StyleSheet.create({
  container: {
    maxWidth: '90%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
});
