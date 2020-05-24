import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon } from './styles';

type MenuButtonProps = TouchableOpacityProps;

const MenuButton: React.FC<MenuButtonProps> = ({ onPress, ...rest }) => {
  return (
    <Container {...rest} onPress={onPress}>
      <Icon name="more-vertical" size={20} color="#FFF" />
    </Container>
  );
};

export default MenuButton;
