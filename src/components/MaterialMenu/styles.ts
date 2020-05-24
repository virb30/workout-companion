import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Menu, { MenuItem, MenuItemProps } from 'react-native-material-menu';

const { width } = Dimensions.get('window');

interface MaterialMenuItemProps extends MenuItemProps {
  textColor?: string;
}

export const Container = styled(Menu)`
  width: 100%;
  max-width: ${width / 2}px;
  background: #242121;
`;

export const MaterialMenuItem = styled(MenuItem).attrs<MaterialMenuItemProps>(
  props => {
    const textColor = props.textColor || '#FFF';

    return {
      ...props,
      textStyle: {
        color: textColor,
        fontSize: 16,
      },
    };
  },
)<MaterialMenuItemProps>``;
