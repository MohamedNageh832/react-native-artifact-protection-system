import {StyleSheet, Text, View} from 'react-native';
import {externalStyles} from './styles';
import {MESSAGES} from './constants';
import {useConnections} from '../../../context/ContectionsContext';

export default function Tempreture() {
  const {state} = useConnections();
  const {tempreture, tempretureState} = state;
  const styles = externalStyles({tempretureState});

  return (
    <View style={styles.tempreture}>
      <Text style={styles.tempretureValue}>{tempreture}° C</Text>
      <Text style={styles.tempretureMessage}>{MESSAGES[tempretureState]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
