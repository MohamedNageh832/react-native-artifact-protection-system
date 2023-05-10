import {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from './components';
import ConnectionsProvider from './context/ContectionsContext';
import ComponentsState from './components/components-state';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <ConnectionsProvider>
      <SafeAreaView style={{flex: 1}}>
        <Header isConnected={isConnected} />
        <ComponentsState />
      </SafeAreaView>
    </ConnectionsProvider>
  );
};

const styles = new StyleSheet.create({});

export default App;
