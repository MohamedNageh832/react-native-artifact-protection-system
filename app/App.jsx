import {ConnectionsProvider} from './features/connections';
import {ModalsProvider} from './features/modals';
import {Home} from './screens';

const App = () => {
  return (
    <ModalsProvider>
      <ConnectionsProvider>
        <Home />
      </ConnectionsProvider>
    </ModalsProvider>
  );
};

export default App;
