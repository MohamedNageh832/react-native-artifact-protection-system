import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import headerImg from '../../assets/images/home-background.jpg';
import {externalStyles} from './styles';
import ConnectionState from './connection-state';
import Tempreture from './tempreture';
import Controls from './controls';

export default function Header() {
  const styles = externalStyles();

  return (
    <View>
      <ImageBackground source={headerImg} style={styles.header}>
        <View style={styles.overlay}>
          <View>
            <Text style={styles.title}>Artifact Protection</Text>
            <ConnectionState />
          </View>
          <Tempreture />
          <Controls />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
