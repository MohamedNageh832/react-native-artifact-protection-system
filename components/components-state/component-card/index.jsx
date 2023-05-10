import {Image, Text, View} from 'react-native';
import {externalStyles} from './styles';

export default function ComponentCard({data}) {
  const {image, text, state} = data || {};
  const styles = externalStyles();

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.state}>{state}</Text>
    </View>
  );
}
