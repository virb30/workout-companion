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

export const CurrentDateButton = styled.TouchableOpacity`
  flex: 1;
`;

export const CurrentDateText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const ControlItem = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  padding: 20px 10px;
`;

export const ControlItemTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const DurationContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`;

export const InputContainer = styled.View`
  flex: 2;
`;

export const DurationSuffixText = styled.Text`
  flex: 2;
  font-weight: bold;
  margin-left: 15px;
  font-size: 18px;
  color: #fff;
`;
