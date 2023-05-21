import {Text, View} from 'react-native';
import {
  Modal,
  ModalText,
  ModalTitle,
  PositionCenter,
} from '../../../../components';
import {useModals} from '../../context/ModalsContext';
import {externalStyles} from './styles';

const SuccessModal = () => {
  const {state} = useModals();
  const {title, messages} = state.successModal;

  const styles = externalStyles();

  return (
    <Modal>
      <ModalTitle style={styles.title}>{title}</ModalTitle>
      {messages &&
        messages.map((message, i) => (
          <ModalText key={`message-s${i}`}>{message}</ModalText>
        ))}
    </Modal>
  );
};

export default SuccessModal;
