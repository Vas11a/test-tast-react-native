import { StatusBar } from 'expo-status-bar';
import Navigation from './screens/Navigation';
import { store } from './store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
      <Provider store={store}>
        <Navigation />
        <StatusBar style="auto" />
      </Provider>
  );
}


