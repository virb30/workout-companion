import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background: #f57c00;
  border-radius: 10px;

  justify-content: center;
  align-items: center;

  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  color: #141818;
  font-weight: bold;
  font-size: 18px;
`;
