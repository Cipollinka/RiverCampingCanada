import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStack} from '@navigation/RootStack';
import './global.css';
import {Provider} from 'jotai';

function App(): React.JSX.Element {
  return (
    <Provider>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
