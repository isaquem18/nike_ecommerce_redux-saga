import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${RFPercentage(10)}px;
  justify-content: center;
  padding-left: ${RFPercentage(2)}px;
`;

export const H1 = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_700};
  font-family: ${({ theme }) => theme.fonts.ubuntu_700};
`;