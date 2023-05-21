import BluetoothSerial from 'react-native-bluetooth-serial';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Modal, ModalBtn, ModalTitle} from '../../../../components';
import {externalStyles} from './styles';
import {useModals} from '../../context/ModalsContext';
import {FormInput} from '../../../../components/form';

const DisableSecurityModal = () => {
  const {setShowDisableSecurityModal} = useModals();
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = value => {
    setValue(value);

    if (value === '') return;
    setError(null);
  };

  const handleSubmit = async () => {
    if (value === '') return setError("This field can't be empty");
    setIsPending(true);

    await BluetoothSerial.write(`disSecurity:${value}`);
  };

  const styles = externalStyles({isFocused, error});

  const hideModal = () => setShowDisableSecurityModal(false);

  useEffect(() => {
    BluetoothSerial.withDelimiter('\r').then(() => {
      BluetoothSerial.on('read', msg => {
        const [identifier, value] = msg.split(':');

        if (identifier === 'disSecurity' && value === 'true') {
          setIsPending(false);
        } else if (identifier === 'disSecurity' && value !== 'true') {
          setIsPending(false);
        }
      });
    });
  }, []);

  return (
    <Modal>
      <ModalTitle>Disable security?</ModalTitle>

      <FormInput
        isPending={isPending}
        value={value}
        type="password"
        style={styles.inputHolder}
        inputStyle={styles.formInput}
        placeholder="Enter password..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChange}
        errorMessage={error}
        autoFocus
      />

      <View style={styles.modalControls}>
        <ModalBtn onPress={handleSubmit}>Confirm</ModalBtn>
        <ModalBtn onPress={hideModal} style={styles.cancelBtn}>
          Cancel
        </ModalBtn>
      </View>
    </Modal>
  );
};

export default DisableSecurityModal;
