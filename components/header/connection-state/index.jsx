import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {externalStyles} from './styles';
import {useConnections} from '../../../context/ContectionsContext';

export default function ConnectionState() {
  const {state} = useConnections();
  const {isConnected} = state;
  const styles = externalStyles({isConnected});

  return (
    <View style={styles.connection}>
      <Text style={styles.connectionLabel}>Connection state</Text>
      <Text style={styles.connectionState}>
        {isConnected ? 'Connected' : 'Disconnected'}
      </Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.connectionBtn}>
          {isConnected ? 'Disconnect' : 'Connect'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
