import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

import database from './database';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1a1818" />
      <DatabaseProvider database={database}>
        <AppProvider>
          <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <Routes />
          </View>
        </AppProvider>
      </DatabaseProvider>
    </NavigationContainer>
  );
};

export default App;
