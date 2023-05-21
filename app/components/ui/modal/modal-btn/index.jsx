import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ModalBtn = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.modalBtn}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ModalBtn;

const styles = new StyleSheet.create({
  modalBtn: {
    paddingVertical: 4,
    fontWeight: 700,
  },
});
