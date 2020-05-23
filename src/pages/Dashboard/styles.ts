import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const WelcomeText = styled.Text`
  font-size: 16px;
  color: #f4ede8;
`;

export const SignOutButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  padding: 0;

  background: #1a1818;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FeatherIcon)``;

export const DateNavigation = styled.View`
  width: 100%;
  padding: 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-bottom-width: 1px;
  border-bottom-color: #fff;
`;

export const DateNavigationButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;
`;

export const CurrentDateText = styled.Text`
  flex: 1;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const ControlItem = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  padding: 10px;
`;

export const ControlItemTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
