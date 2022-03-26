import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const Footer = styled(Animated.View)`
  flex-direction: row;
`;

export const Filter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  /* padding-bottom: ${Platform.OS === 'ios' ? getBottomSpace() : 0}px; */
  background-color: ${({ theme }) => theme.colors.gray_500};
`;

export const Order = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  /* padding-bottom: ${Platform.OS === 'ios' ? getBottomSpace() : 0}px; */
  background-color: ${({ theme }) => theme.colors.gray_800};
`;

export const FilterIcon = styled(FontAwesome).attrs({
  name: 'filter',
  color: '#fff',
  size: RFValue(22)
})`
  margin-right: 3px;
`;

export const OrderIcon = styled(FontAwesome).attrs({
  name: 'reorder',
  color: '#fff',
  size: RFValue(22)
})`
  margin-right: 3px;
`;

const AllTexts = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.ms_300};
  font-size: ${RFValue(12)}px;
  margin-left: 3px;
`;

export const FilterText = styled(AllTexts)``;

export const OrderText = styled(AllTexts)``;
