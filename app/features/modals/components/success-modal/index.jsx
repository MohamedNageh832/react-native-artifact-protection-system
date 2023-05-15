import {Text, View} from 'react-native';
import {PositionCenter} from '../../../../components';
import {useModals} from '../../context/ModalsContext';
import {externalStyles} from './styles';

const SuccessModal = () => {
  const {state} = useModals();
  const {title, messages} = state.successModal;

  const styles = externalStyles();

  return (
    <PositionCenter overlay>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {messages &&
          messages.map((message, i) => (
            <Text style={styles.message} key={`message-s${i}`}>
              {message}
            </Text>
          ))}
      </View>
    </PositionCenter>
  );
};

export default SuccessModal;
