import React, { useEffect, useRef, useState, useCallback } from 'react';
import { SliderProps as ReactSliderProps } from '@react-native-community/slider';
import { useField } from '@unform/core';

import {
  Container,
  ReactSlider,
  SliderValueText,
  InputContainer,
  LabelContainer,
  LabelText,
} from './styles';

interface SliderProps extends ReactSliderProps {
  name: string;
  maximumLabel?: string;
  minimumLabel?: string;
  minimumValue?: number;
}

const Slider: React.FC<SliderProps> = ({
  name,
  maximumLabel,
  minimumLabel,
  minimumValue = 0,
  ...rest
}) => {
  const [currentValue, setCurrentValue] = useState(minimumValue);
  const sliderRef = useRef(null);

  const { registerField, defaultValue = 0, fieldName, error } = useField(name);

  const handleValueChange = useCallback((value: number) => {
    setCurrentValue(value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: sliderRef.current,
      getValue: () => {
        return currentValue;
      },
      setValue: (_: any, value: number) => {
        setCurrentValue(value);
      },
      clearValue: () => {
        setCurrentValue(defaultValue);
      },
    });
  }, [fieldName, registerField, currentValue, defaultValue]);

  return (
    <Container>
      <InputContainer>
        <ReactSlider
          ref={sliderRef}
          {...rest}
          value={currentValue}
          minimumValue={minimumValue}
          onValueChange={handleValueChange}
          step={1}
        />
        <SliderValueText>{currentValue}</SliderValueText>
      </InputContainer>

      <LabelContainer>
        {minimumLabel && <LabelText>{minimumLabel}</LabelText>}
        {maximumLabel && <LabelText>{maximumLabel}</LabelText>}
      </LabelContainer>
    </Container>
  );
};

export default Slider;
