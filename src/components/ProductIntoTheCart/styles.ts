import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';


export const Container = styled.View`
  flex-direction: row;
  padding: ${RFPercentage(2)}px 0;
  border-bottom-width: 1px;
  border-bottom-color: #00000020;

`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(15)}px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  padding: 0 10px;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.ubuntu_700};
  font-size: ${RFValue(14)}px;
`;

export const Size = styled.Text`

`;

export const QuantityInput = styled.View`
  flex-direction: row;
`;

export const Plus = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  height: ${RFPercentage(6)}px;
  width:  ${RFPercentage(6)}px;
  border: 2px solid ${({ theme }) => `${theme.colors.gray_500}10`};
  border-radius: ${RFPercentage(2)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(2)}px;
`;

export const Minus = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  height: ${RFPercentage(6)}px;
  width:  ${RFPercentage(6)}px;
  border: 2px solid ${({ theme }) => `${theme.colors.gray_500}10`};
  border-radius: ${RFPercentage(2)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(2)}px;
`;

export const QuantityButtonText = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme}) => `${theme.colors.gray_500}90`};
`;

export const Quantity = styled.TextInput.attrs({
  returnKeyType: 'done',
  keyboardType: 'decimal-pad'
})`
  height: ${RFPercentage(7)}px;
  width:  ${RFPercentage(7)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(2)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_500};
  font-family: ${({ theme }) => theme.fonts.ms_300}
  font-size: ${RFValue(17)}px;
`;

export const TrashButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  height: ${RFPercentage(6)}px;
  width:  ${RFPercentage(6)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(2)}px;
  position: absolute;
  right: 0;
`;

export const TrashIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'trash',
  size: RFValue(20),
  color: theme.colors.gray_500,
}))`
  opacity: 0.3
`;