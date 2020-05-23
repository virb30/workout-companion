import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerTitle: 'Controle de Treino',
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#1a1818' },
      cardStyle: { backgroundColor: '#383535' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;
