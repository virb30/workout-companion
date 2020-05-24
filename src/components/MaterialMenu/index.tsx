import React, { useRef, useCallback } from 'react';
import Menu from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import MenuButton from './MenuButton';

import { Container, MaterialMenuItem } from './styles';

const MaterialMenu: React.FC = () => {
  const menuRef = useRef<Menu>(null);
  const navigation = useNavigation();

  const { signOut } = useAuth();

  const showMenu = useCallback(() => {
    menuRef.current?.show();
  }, [menuRef]);

  const hideMenu = useCallback(() => {
    menuRef.current?.hide();
  }, [menuRef]);

  const handleNavigate = useCallback(
    (route: string) => {
      hideMenu();
      navigation.navigate(route);
    },
    [navigation, hideMenu],
  );

  return (
    <Container ref={menuRef} button={<MenuButton onPress={showMenu} />}>
      <MaterialMenuItem onPress={() => handleNavigate('Help')}>
        Minha Conta
      </MaterialMenuItem>
      <MaterialMenuItem onPress={() => handleNavigate('Help')}>
        Ajuda
      </MaterialMenuItem>
      <MaterialMenuItem onPress={signOut} textColor="#e84341">
        Sair
      </MaterialMenuItem>
    </Container>
  );
};

export default MaterialMenu;
