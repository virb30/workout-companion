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
  margin-bottom: 20px;
  width: 100%;
  padding: 0 16px;
`;

export const StaticInputText = styled.Text`
  font-size: 16px;
  color: #ddd;
`;

export const Icon = styled(FeatherIcons)`
  margin-right: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButtonText = styled.Text`
  color: #f57c00;
  font-size: 16px;
  font-weight: bold;
`;
