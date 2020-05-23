import React from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, WelcomeText } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <WelcomeText>
        Olá,
        {user.name}
      </WelcomeText>
    </Container>
  );
};

export default Dashboard;
