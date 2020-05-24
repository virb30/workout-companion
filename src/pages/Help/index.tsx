import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, HelpItemText, HelpItem, Icon } from './styles';

const Help: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigate = useCallback(
    (route: string) => {
      navigation.navigate(route);
    },
    [navigation],
  );

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <HelpItem onPress={() => handleNavigate('Privacy')}>
          <Icon name="file-text" size={18} />
          <HelpItemText>Termos e política de privacidade</HelpItemText>
        </HelpItem>
        <HelpItem onPress={() => handleNavigate('FAQ')}>
          <Icon name="help-circle" size={18} />
          <HelpItemText>FAQ</HelpItemText>
        </HelpItem>
      </Container>
    </ScrollView>
  );
};

export default Help;
