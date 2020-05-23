import React, { useState, useMemo, useCallback } from 'react';
import { addDays, subDays, format } from 'date-fns';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

import {
  Container,
  SignOutButton,
  DateNavigation,
  CurrentDateText,
  Icon,
  DateNavigationButton,
  ControlItem,
  ControlItemTitle,
} from './styles';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { user, signOut } = useAuth();

  const formattedDate = useMemo(() => {
    return format(selectedDate, 'dd/MM/yyyy');
  }, [selectedDate]);

  const handleNextDay = useCallback(() => {
    const newDate = addDays(selectedDate, 1);

    setSelectedDate(newDate);
  }, [selectedDate]);

  const handlePreviousDay = useCallback(() => {
    const newDate = subDays(selectedDate, 1);

    setSelectedDate(newDate);
  }, [selectedDate]);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <DateNavigation>
              <DateNavigationButton onPress={handlePreviousDay}>
                <Icon name="chevron-left" color="#fff" size={24} />
              </DateNavigationButton>

              <CurrentDateText>{formattedDate}</CurrentDateText>

              <DateNavigationButton onPress={handleNextDay}>
                <Icon name="chevron-right" color="#fff" size={24} />
              </DateNavigationButton>
            </DateNavigation>

            <ControlItem>
              <ControlItemTitle>TQR - Recuperação</ControlItemTitle>
            </ControlItem>

            <ControlItem>
              <ControlItemTitle>CPS - Dor</ControlItemTitle>
            </ControlItem>

            <ControlItem>
              <ControlItemTitle>RPE - Perceção do treino</ControlItemTitle>
            </ControlItem>

            <ControlItem>
              <ControlItemTitle>Duração</ControlItemTitle>
            </ControlItem>
          </Container>

          <SignOutButton onPress={signOut}>
            <Icon name="power" color="#fff" size={24} />
          </SignOutButton>
        </ScrollView>
      </KeyboardAvoidingView>
      <Button onPress={() => {}}>SALVAR</Button>
    </>
  );
};

export default Dashboard;
