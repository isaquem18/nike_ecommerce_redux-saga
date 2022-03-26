import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const BoxContainer = styled.View`
  height: ${RFPercentage(30)}px;
  margin-bottom: 10px;
  flex: 1;
  padding: ${RFPercentage(0.5)}px ${RFPercentage(1)}px;
`;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  flex: 1;
  border-radius: ${RFPercentage(3)}px;
  background-color: ${({ theme }) => theme.colors.bg_product};
  align-items: center;

  overflow: hidden;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2
})`
  font-family: ${({ theme }) => theme.fonts.ubuntu_400};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray_800};
`;

export const LikeButton = styled(Feather).attrs(({ theme }) => ({
  name: 'heart',
  color: theme.colors.gray_500
}))`
  font-size: ${RFValue(20)}px;
  position: absolute;
  right: 6px;
  top: 2px;
  z-index: 2;
  padding: ${RFPercentage(2)}px;

`;

export const ImageContainer = styled.View.attrs({

})` 
  width: 200px;
  height: 120px;
  align-items: center;
  justify-content: center;

`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'cover'
})` 
  width: ${width/2}px;
  flex: 1;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.ms_900};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.orange_700};
  position: absolute;
  bottom: ${RFPercentage(2)}px;
`;
