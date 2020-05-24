import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: { email: string };
};

const Auth = createStackNavigator<AuthStackParamList>();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    initialRouteName="SignIn"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#383535' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
