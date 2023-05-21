import {Modal, ModalBtn, ModalText, ModalTitle} from '../../../../components';
import {useModals} from '../../context/ModalsContext';
import {externalStyles} from './styles';

const ErrorModal = () => {
  const {state, setShowErrorModal} = useModals();
  const {title, messages} = state.errorModal;
  const styles = externalStyles();

  const hideModal = () => setShowErrorModal(false);

  return (
    <Modal>
      <ModalTitle style={styles.title}>{title}</ModalTitle>

      {messages.map((message, i) => (
        <ModalText key={`error-msg${i}`}>{message}</ModalText>
      ))}

      <ModalBtn onPress={hideModal}>Close</ModalBtn>
    </Modal>
  );
};

export default ErrorModal;
