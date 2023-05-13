import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {externalStyles} from './styles';
import {useConnections} from '../../../features/connections/context/ContectionsContext';

export default function Controls() {
  const {state} = useConnections();
  const styles = externalStyles();

  return (
    <View style={styles.controls}>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={[styles.controlsBtn, styles.disableSecurityBtn]}>
          Disable security
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={[styles.controlsBtn, styles.changePasswordBtn]}>
          Change password
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
