import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Entypo, Feather } from '@expo/vector-icons';

export const DrawerRightIconContainer =styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
  overlayColor: 'none'
})`
  width: ${RFPercentage(9)}px;
  height: ${RFPercentage(9)}px;
  border-radius: ${RFPercentage(3.5)}px;
  border: 2px solid ${({theme}) => `${theme.colors.gray_500}10`};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const DrawerLeftIconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
  overlayColor: 'none'
})`
  width: ${RFPercentage(9)}px;
  height: ${RFPercentage(9)}px;
  border-radius: ${RFPercentage(3.5)}px;
  border: 2px solid ${({theme}) => `${theme.colors.gray_500}10`};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const DrawerIcons = styled(Feather).attrs(({theme}) => ({
  name: 'menu',
  size: RFValue(24),
  color: `${theme.colors.gray_500}`
}))``;

export const MenuDrawerIcons = styled(DrawerIcons).attrs(({theme}) => ({
  name: 'menu',
  size: RFValue(24),
  color: `${theme.colors.gray_500}`
}))``;

export const CartDrawerIcons = styled(DrawerIcons).attrs(({theme}) => ({
  name: 'shopping-bag',
  size: RFValue(24),
  color: `${theme.colors.gray_500}`
}))``;