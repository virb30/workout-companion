import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  margin: 64px 0 24px;
`;

export const StaticInput = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StaticInputText = styled.Text`
  font-size: 20px;
  color: #f4ede8;
`;

export const Icon = styled(FeatherIcons)`
  color: #f4ede8;
  margin-left: 16px;
`;
