import { Platform } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

interface ContainerProps {
  bgColor: string;
  marginBottom: number;
}

export const Container = styled.TouchableOpacity.attrs(({ theme }) => ({
  activeOpacity: 0.8
}))<ContainerProps>`
  width: 100%;
  height: ${Platform.OS === 'ios' ? RFPercentage(12) : RFPercentage(14)}px;
  flex; 1;
  background-color: ${({ bgColor }) => bgColor};
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  bottom: ${({marginBottom}) => marginBottom}px;
  padding-bottom: ${RFPercentage(1)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.bg};
  font-family: ${({ theme }) => theme.fonts.ms_300}
  font-size: ${RFValue(13)}px;
  letter-spacing: 1px;
  margin-right: ${RFPercentage(2)}px;
  font-variant: small-caps;
`;
