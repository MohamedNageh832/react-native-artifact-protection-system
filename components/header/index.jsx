import BluetoothSerial from 'react-native-bluetooth-serial';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import headerImg from '../../assets/images/home-background.jpg';
import {externalStyles} from './styles';
import ConnectionState from './connection-state';
import Tempreture from './tempreture';
import Controls from './controls';
import {useEffect} from 'react';
import {useConnections} from '../../features/connections/context/ContectionsContext';

export default function Header() {
  const {setValue} = useConnections();
  const styles = externalStyles();

  useEffect(() => {
    BluetoothSerial.withDelimiter('\r').then(() => {
      BluetoothSerial.on('read', data => {
        console.log(`DATA FROM BLUETOOTH: ${data.data}`);
      });
    });
  }, []);

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
