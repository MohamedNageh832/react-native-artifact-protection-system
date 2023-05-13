import {ActivityIndicator} from 'react-native';
import {externalStyles} from './styles';

const LoaderScreen = () => {
  const styles = externalStyles();

  return <ActivityIndicator size="large" style={styles.loader} />;
};

export default LoaderScreen;
