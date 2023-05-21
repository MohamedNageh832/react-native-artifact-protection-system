import {Text} from 'react-native';
import {externalStyles} from './styles';

const ModalText = ({children}) => {
  const styles = externalStyles();

  return <Text style={styles.text}>{children}</Text>;
};

export default ModalText;
