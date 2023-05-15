import {Text, TouchableOpacity, View} from 'react-native';
import {PositionCenter} from '../../../../components';
import {useModals} from '../../context/ModalsContext';
import {externalStyles} from './styles';

const ErrorModal = () => {
  const {state, setShowErrorModal} = useModals();
  const {title, messages} = state.errorModal;
  const styles = externalStyles();

  const hideModal = () => setShowErrorModal(false);

  return (
    <PositionCenter overlay onPress={hideModal}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        {messages.map((message, i) => (
          <Text key={`error-msg${i}`} style={styles.message}>
            {message}
          </Text>
        ))}
        <TouchableOpacity onPress={hideModal}>
          <Text style={styles.closeBtn}>Close</Text>
        </TouchableOpacity>
      </View>
    </PositionCenter>
  );
};

export default ErrorModal;
