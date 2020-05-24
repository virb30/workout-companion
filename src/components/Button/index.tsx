import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { ActivityIndicator } from 'react-native';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  ...rest
}) => (
  <Container {...rest} enabled={!loading}>
    {loading ? (
      <ActivityIndicator color="#141818" />
    ) : (
      <ButtonText>{children}</ButtonText>
    )}
  </Container>
);

export default Button;
