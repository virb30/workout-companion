import React, { useRef, useCallback, useState } from 'react';
import {
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useRoute, RouteProp } from '@react-navigation/native';
import * as Yup from 'yup';

import { AuthStackParamList } from '../../routes/auth.routes';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/Brand.png';

import { Container, Title, StaticInput, StaticInputText, Icon } from './styles';

interface SignUpFormData {
  name: string;
}

type SignUpScreenRouteProp = RouteProp<AuthStackParamList, 'SignUp'>;

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { signIn, signUp } = useAuth();
  const route = useRoute<SignUpScreenRouteProp>();

  const { email } = route.params;

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        await signUp({
          email,
          name: data.name,
        });

        await signIn({ email });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro ao cadastrar',
          'Ocorreu um erro criar sua conta, tente novamente',
        );
      } finally {
        setLoading(false);
      }
    },
    [signIn, signUp, email],
  );

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
            <Image source={logoImg} />

            <View>
              <Title>Complete seu cadastro</Title>
            </View>

            <Form onSubmit={handleSubmit} ref={formRef}>
              <StaticInput>
                <Icon name="mail" size={20} />
                <StaticInputText>{email}</StaticInputText>
              </StaticInput>

              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>

            <Button
              onPress={() => formRef.current?.submitForm()}
              loading={loading}
            >
              Começar a usar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
