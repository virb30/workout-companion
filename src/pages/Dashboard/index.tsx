import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { addDays, subDays, format, startOfDay } from 'date-fns';
import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  Animated,
} from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '@nozbe/watermelondb/hooks';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';
import Slider from '../../components/Slider';
import Input from '../../components/Input';

import {
  Container,
  DateNavigation,
  CurrentDateText,
  Icon,
  DateNavigationButton,
  ControlItem,
  ControlItemTitle,
  CurrentDateButton,
  DurationContainer,
  DurationSuffixText,
  InputContainer,
} from './styles';
import Trainning from '../../database/models/Trainning';

interface ControlFormData {
  tqr: number;
  cps: number;
  rpe: number;
  duration: string;
}

const initialData = {
  tqr: 6,
  cps: 0,
  rpe: 0,
  duration: '0',
};

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  const [trainningId, setTrainningId] = useState<string | undefined>(undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const database = useDatabase();

  const translateX = new Animated.Value(0);

  const { user } = useAuth();

  useEffect(() => {
    async function loadData(): Promise<void> {
      const trainningsCollection = database.collections.get<Trainning>(
        'trainnings',
      );

      const trainningRecords = await trainningsCollection
        .query(
          Q.where('date', selectedDate.getTime()),
          Q.and(Q.where('user_id', user.id)),
        )
        .fetch();

      const dayTrainningRecord = trainningRecords[0];

      if (dayTrainningRecord) {
        const { tqr, rpe, cps, duration } = dayTrainningRecord;

        formRef.current?.setData({
          tqr,
          rpe,
          cps,
          duration: String(duration),
        });
        setTrainningId(dayTrainningRecord.id);
        return;
      }

      formRef.current?.reset();
      setTrainningId(undefined);
    }

    loadData();
  }, [selectedDate, user.id, database.collections]);

  const formattedDate = useMemo(() => {
    return format(selectedDate, 'dd/MM/yyyy');
  }, [selectedDate]);

  const handleNextDay = useCallback(() => {
    const newDate = addDays(selectedDate, 1);

    Animated.timing(translateX, {
      toValue: -100,
      delay: 50,
      useNativeDriver: true,
    }).start(() => {
      setSelectedDate(startOfDay(newDate));
    });
  }, [selectedDate, translateX]);

  const handlePreviousDay = useCallback(() => {
    const newDate = subDays(selectedDate, 1);

    Animated.timing(translateX, {
      toValue: 100,
      delay: 50,
      useNativeDriver: true,
    }).start(() => {
      setSelectedDate(startOfDay(newDate));
    });
  }, [selectedDate, translateX]);

  const handleShowDatePicker = useCallback(() => {
    setShowDatePicker(true);
  }, []);

  const handleChangeDate = useCallback((event, date) => {
    setShowDatePicker(false);
    if (event.type === 'set') {
      setSelectedDate(startOfDay(date));
    }
  }, []);

  const handleSubmit = useCallback(
    async (data: ControlFormData) => {
      const trainningsCollection = database.collections.get<Trainning>(
        'trainnings',
      );
      const { rpe, cps, tqr, duration } = data;

      await database.action(async () => {
        if (trainningId) {
          const trainning = await trainningsCollection.find(trainningId);
          await trainning.update(record => {
            record.rpe = rpe;
            record.cps = cps;
            record.tqr = tqr;
            record.duration = Number(duration);
            record.date = selectedDate;
            record.user_id = user.id;
          });

          return;
        }

        await trainningsCollection.create(record => {
          record.rpe = rpe;
          record.cps = cps;
          record.tqr = tqr;
          record.duration = Number(duration);
          record.date = selectedDate;
          record.user_id = user.id;
        });
      });

      Alert.alert('Registro salvo', 'Registro salvo com sucesso');

      Keyboard.dismiss();
    },
    [database, selectedDate, trainningId, user.id],
  );

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <DateNavigation>
          <DateNavigationButton onPress={handlePreviousDay}>
            <Icon name="chevron-left" color="#fff" size={24} />
          </DateNavigationButton>

          <CurrentDateButton onPress={handleShowDatePicker}>
            <CurrentDateText>{formattedDate}</CurrentDateText>
          </CurrentDateButton>

          <DateNavigationButton onPress={handleNextDay}>
            <Icon name="chevron-right" color="#fff" size={24} />
          </DateNavigationButton>
        </DateNavigation>

        <Animated.ScrollView
          bounces
          keyboardShouldPersistTaps="handled"
          style={{
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [-100, 0, 100],
                  outputRange: [-400, 0, 400],
                }),
              },
            ],
          }}
        >
          <Container>
            {showDatePicker && (
              <DatePicker
                value={selectedDate}
                display="calendar"
                onChange={handleChangeDate}
                mode="date"
              />
            )}

            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              initialData={initialData}
            >
              <ControlItem>
                <ControlItemTitle>TQR - Recuperação</ControlItemTitle>
                <Slider
                  name="tqr"
                  minimumValue={6}
                  maximumValue={20}
                  minimumLabel="Pouca recuperação"
                  maximumLabel="Boa recuperação"
                />
              </ControlItem>

              <ControlItem>
                <ControlItemTitle>CPS - Dor</ControlItemTitle>
                <Slider
                  name="cps"
                  minimumValue={0}
                  maximumValue={20}
                  minimumLabel="Sem dor"
                  maximumLabel="Extremamente forte"
                />
              </ControlItem>

              <ControlItem>
                <ControlItemTitle>RPE - Perceção do treino</ControlItemTitle>
                <Slider
                  name="rpe"
                  minimumValue={0}
                  maximumValue={10}
                  minimumLabel="Descansado"
                  maximumLabel="Máximo"
                />
              </ControlItem>

              <ControlItem>
                <ControlItemTitle>Duração</ControlItemTitle>
                <DurationContainer>
                  <InputContainer>
                    <Input
                      name="duration"
                      icon="clock"
                      keyboardType="numeric"
                    />
                  </InputContainer>
                  <DurationSuffixText>min</DurationSuffixText>
                </DurationContainer>
              </ControlItem>
            </Form>
          </Container>
        </Animated.ScrollView>
      </KeyboardAvoidingView>
      <Button onPress={() => formRef.current?.submitForm()}>SALVAR</Button>
    </>
  );
};

export default Dashboard;
