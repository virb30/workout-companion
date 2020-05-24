import React, { useRef, useCallback } from 'react';
import Menu, { MenuDivider } from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import MenuButton from './MenuButton';

import { Container, MaterialMenuItem } from './styles';

const MaterialMenu: React.FC = () => {
  const menuRef = useRef<Menu>(null);
  const navigation = useNavigation();

  const { signOut, user } = useAuth();

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
      <MaterialMenuItem disabled disabledTextColor="#BBB" textSize={14}>
        {`${user.email}`}
      </MaterialMenuItem>
      <MenuDivider color="#999" />
      <MaterialMenuItem onPress={() => handleNavigate('Help')}>
        Ajuda
      </MaterialMenuItem>
      <MenuDivider color="#999" />
      <MaterialMenuItem onPress={signOut} textColor="#ff5131">
        Sair
      </MaterialMenuItem>
    </Container>
  );
};

export default MaterialMenu;
