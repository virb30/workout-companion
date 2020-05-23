import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignOutButton from '../components/SignOutButton';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerTitle: 'Controle de Treino',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#1a1818' },
        cardStyle: { backgroundColor: '#383535' },
        headerRightContainerStyle: {
          paddingRight: 20,
        },
        headerRight: () => {
          return <SignOutButton />;
        },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  );
};

export default AppRoutes;
