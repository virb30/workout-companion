import styled from 'styled-components/native';
import Slider, { SliderProps } from '@react-native-community/slider';

export const Container = styled.View`
  margin-top: 10px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 24px;
  margin-top: 5px;
`;

export const ReactSlider = styled(Slider).attrs<SliderProps>(props => {
  return {
    ...props,
    thumbTintColor: '#f57c00',
    maximumTrackTintColor: '#DDD',
    minimumTrackTintColor: '#f57c00',
  };
})`
  flex: 1;
`;

export const SliderValueText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  width: 24px;
`;

export const LabelText = styled.Text`
  color: #ddd;
`;
