import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialMenu from '../components/MaterialMenu';

import Dashboard from '../pages/Dashboard';
import Help from '../pages/Help';
import Privacy from '../pages/Privacy';
import FAQScreen from '../pages/FAQScreen';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#1a1818' },
        cardStyle: { backgroundColor: '#383535' },
        headerRight: () => {
          return <MaterialMenu />;
        },
      }}
    >
      <App.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerTitle: 'Controle de Treino' }}
      />
      <App.Screen
        name="Help"
        component={Help}
        options={{
          headerTitle: 'Ajuda',
        }}
      />
      <App.Screen
        name="Privacy"
        component={Privacy}
        options={{ headerTitle: 'Política de privacidade' }}
      />
      <App.Screen
        name="FAQ"
        component={FAQScreen}
        options={{ headerTitle: 'FAQ' }}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
