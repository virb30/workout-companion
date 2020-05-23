import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  hasError: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: #1a1818;
  border-radius: 10px;
  margin-bottom: 8px;

  border-width: 1px;
  border-color: #1a1818;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #f57c00;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #ddd;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
