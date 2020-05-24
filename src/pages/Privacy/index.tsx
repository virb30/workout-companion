import React from 'react';
import { ScrollView } from 'react-native';

import { Container, PrivacyPolicyText, PrivacyPolicyTitle } from './styles';

const Privacy: React.FC = () => (
  <ScrollView
    contentContainerStyle={{ flex: 1 }}
    keyboardShouldPersistTaps="handled"
  >
    <Container>
      <PrivacyPolicyTitle>Como compartilhamos seus dados?</PrivacyPolicyTitle>
      <PrivacyPolicyText>
        Não visualizamos nem compartilhamos suas informações
      </PrivacyPolicyText>
      <PrivacyPolicyText>
        Os dados inseridos ficam armazenados apenas no seu dispositivo.
      </PrivacyPolicyText>
    </Container>
  </ScrollView>
);

export default Privacy;
