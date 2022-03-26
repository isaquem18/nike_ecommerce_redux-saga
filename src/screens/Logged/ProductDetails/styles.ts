import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { ScrollViewProps } from 'react-native';


import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHozirontal: 14,
    paddingVertical: 10,
    alignItems: 'center'
  }
})`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg_product};
`;

export const ImageContainer = styled.View.attrs({

})` 
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
`;

interface ScrollProps extends ScrollViewProps {
  ref: any;
};

export const ScrollViewGallery = styled.ScrollView.attrs<ScrollProps>({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
  pinchGestureEnabled: true
})<ScrollProps>`
  flex: 1;
  width: 100%;
  flex-direction: row;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'center',
})` 

  flex: 1;
  width: ${RFPercentage(40)}px;

`;

export const NameBox = styled.View`
  width: 100%;
  padding: 0 ${RFPercentage(2)}px;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 2
})`
  color: ${({ theme }) => theme.colors.gray_800};
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.ubuntu_700};
  margin-top: ${RFPercentage(2)}px;
`;

export const ProductTarget = styled.Text`
  color: ${({ theme }) => `${theme.colors.gray_500}40`};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.ms_600};
  font-weight: 600;
`;

export const PriceBox = styled.View`
  width: 100%;
  padding: ${RFPercentage(7)}px ${RFPercentage(2)}px;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.orange_700};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.ubuntu_700};

`;

export const PriceInstallments = styled(ProductTarget)`
  margin-top: ${RFPercentage(1)}px;
`;

export const AddedToCartMessageBox = styled.View`
  bottom: ${RFPercentage(24)}px;
  height: ${RFPercentage(14)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  border-top-left-radius: ${RFPercentage(5)}px;
  border-top-right-radius: ${RFPercentage(5)}px;
  position: absolute;
  align-items: center;
  justify-content: center;
  ${Platform.OS === 'ios' ? css`
    shadow-color: #00000040;
    shadow-opacity: 0.5;
    shadow-radius: 10px;
  ` : css`
    elevation: 10px;
  `}
`;

export const AddedToCartMessage = styled.Text`
  color: ${({ theme }) => `${theme.colors.gray_800}99`};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.ubuntu_700};
`;

export const Overlay = styled.View`
  width: ${width}px;
  height: ${height}px;
  flex: 1;
  background-color: #00000099;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const CloseBoxButton = styled.TouchableOpacity`
  background-color: #fff;
  position: absolute;
  top: -30px;
  right: 50px;
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #00000030;
`;

export const CloseFooterSlideUp = styled(AntDesign).attrs(({theme}) => ({
  color: theme.colors.gray_700,
  name: 'close',
  size: RFValue(24)
}))`

`;