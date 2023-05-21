import {Text, View} from 'react-native';
import {externalStyles} from './styles';

const ModalTitle = ({children, subTitle, style}) => {
  const styles = externalStyles();

  return (
    <View>
      <Text style={[styles.title, style]}>{children}</Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
};

export default ModalTitle;
