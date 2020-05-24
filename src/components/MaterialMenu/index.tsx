import React, { useRef, useCallback } from 'react';
import Menu, { MenuDivider } from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';

import MenuButton from './MenuButton';

import { Icon, MaterialMenuItem } from './styles';

const MaterialMenu: React.FC = () => {
  const menuRef = useRef<Menu>(null);
  const navigation = useNavigation();

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
    <Menu ref={menuRef} button={<MenuButton onPress={showMenu} />}>
      <MaterialMenuItem onPress={() => handleNavigate('Help')}>
        <Icon name="help-circle" size={14} color="#141818" />
        Ajuda
      </MaterialMenuItem>
    </Menu>
  );
};

export default MaterialMenu;
