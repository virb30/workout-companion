import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Menu, { MenuItem, MenuItemProps } from 'react-native-material-menu';

const { width } = Dimensions.get('window');

interface MaterialMenuItemProps extends MenuItemProps {
  textColor?: string;
  textSize?: number;
}

export const Container = styled(Menu)`
  width: 100%;
  max-width: ${width / 2}px;
  background: #2b2b2b;
  border-radius: 0;
`;

export const MaterialMenuItem = styled(MenuItem).attrs<MaterialMenuItemProps>(
  props => {
    const { disabled, disabledTextColor, textColor, textSize } = props;

    const color = (disabled ? disabledTextColor : textColor) || '#FFF';

    return {
      ...props,
      textStyle: {
        color,
        fontSize: textSize || 16,
      },
    };
  },
)<MaterialMenuItemProps>``;

export const MaterialMenuItemText = styled.Text``;
