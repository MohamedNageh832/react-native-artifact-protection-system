import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {externalStyles} from './styles';
import {useConnections} from '../../../features/connections/context/ContectionsContext';
import {useModals} from '../../../features/modals';

export default function Controls() {
  const {state} = useConnections();
  const {setShowDisableSecurityModal, setShowErrorModal} = useModals();
  const styles = externalStyles();

  const handleDisableSecurity = () => {
    if (!state.isConnected) {
      setShowErrorModal(true, {
        title: 'No Connection detected!',
        messages: [
          'Connect to an Artifact first before you can disable security.',
        ],
      });
    } else {
      setShowDisableSecurityModal(true);
    }
  };

  return (
    <View style={styles.controls}>
      <TouchableOpacity activeOpacity={0.8} onPress={handleDisableSecurity}>
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
