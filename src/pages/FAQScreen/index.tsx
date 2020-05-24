import React from 'react';
import { ScrollView } from 'react-native';

import { Container, Question, Title, Paragraph } from './styles';

const FAQScreen: React.FC = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Container>
        <Question>
          <Title>Como funciona a escala TQR?</Title>
          <Paragraph>
            A escala TQR é utilizada para indicar a taxa de recuperação
            muscular.
          </Paragraph>
          <Paragraph>
            A escala varia de 6 (Muito, muito pouca recuperação) a 20 (Muito,
            muito boa recuperação)
          </Paragraph>
          <Paragraph>Deve ser preenchido antes do treino</Paragraph>
        </Question>

        <Question>
          <Title>Como funciona a escala CPS?</Title>
          <Paragraph>
            A escala CPS é utilizada para indicar a taxa de dores musculares no
            momento.
          </Paragraph>
          <Paragraph>
            A escala varia de 0 (sem dor) a 20 (Extremamente forte)
          </Paragraph>
          <Paragraph>Deve ser preenchido antes do treino</Paragraph>
        </Question>

        <Question>
          <Title>Como funciona a escala RPE?</Title>
          <Paragraph>
            A escala RPE é utilizada para indicar a taxa de percepção do esforço
            realizado treino.
          </Paragraph>
          <Paragraph>A escala varia de 0 (Descansado) a 10 (Máximo)</Paragraph>
          <Paragraph>
            Deve ser preenchido após 30 min do término do treino
          </Paragraph>
        </Question>

        <Question>
          <Title>Como devo informar a Duração?</Title>
          <Paragraph>
            Informar o total de tempo do treino, considerando aquecimento, em
            minutos
          </Paragraph>
        </Question>

        <Question>
          <Title>Para qual finalidade essas informações são utilizadas?</Title>
          <Paragraph>
            As informações coletadas pelo aplicativo, irão auxiliar no controle
            diário do seu treino.
          </Paragraph>
          <Paragraph>
            Essas informações também poderão ser utilizadas pelo seu treinador
            para avaliar seu desempenho e proceder com as alterações do treino
            da melhor maneira possível
          </Paragraph>
        </Question>
      </Container>
    </ScrollView>
  );
};

export default FAQScreen;
