import {StyleSheet, View} from 'react-native';
import PositionCenter from '../../position-center';
import {externalStyles} from './styles';

const Modal = ({children}) => {
  const styles = externalStyles();

  return (
    <PositionCenter overlay>
      <View style={styles.container}>{children}</View>
    </PositionCenter>
  );
};

export default Modal;
