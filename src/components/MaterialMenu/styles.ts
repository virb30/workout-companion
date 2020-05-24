import styled from 'styled-components';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { MenuItem } from 'react-native-material-menu';

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const MaterialMenuItem = styled(MenuItem).attrs(props => {
  return {
    ...props,
    style: {},
    textStyle: {
      textAlign: 'left',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  };
})``;
