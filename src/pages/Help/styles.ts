import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
`;

export const HelpItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  border-bottom-color: #fff;
  border-bottom-width: 1px;
  padding: 20px 30px;
`;

export const HelpItemText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcons)`
  color: #fff;
  margin-right: 16px;
`;
