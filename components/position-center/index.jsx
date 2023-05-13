import {TouchableOpacity} from 'react-native';
import {externalStyles} from './styles';

const PositionCenter = ({children, overlay, onPress}) => {
  const styles = externalStyles({overlay});
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default PositionCenter;
