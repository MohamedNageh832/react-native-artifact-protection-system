import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../services/colors';

const ModalBtn = ({onPress, children, style}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Text style={[styles.modalBtn, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ModalBtn;

const styles = new StyleSheet.create({
  modalBtn: {
    paddingVertical: 4,
    fontWeight: 700,
    color: COLORS.secondary,
  },
});
