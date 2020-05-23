import React from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Icon } from './styles';

const SignOutButton: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container onPress={signOut}>
      <Icon name="power" size={20} color="#FFF" />
    </Container>
  );
};

export default SignOutButton;
