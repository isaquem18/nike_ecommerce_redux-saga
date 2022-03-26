import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: RFPercentage(50)
  },
  showsVerticalScrollIndicator: false
})`

`;

export const PurchaseInformation = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.orange_700};
  position: absolute;
  bottom: ${Platform.OS === 'ios' ? RFPercentage(12) : RFPercentage(14)}px;
`;

const SectionData = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0px 14px;
  
`;

export const SubTotal = styled(SectionData)`
  margin-top: ${RFPercentage(2)}px;
  margin-bottom: ${RFPercentage(1)}px;
`;

export const Freight = styled(SectionData)``;

export const Divider = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.orange_500};
  margin: ${RFPercentage(2)}px ${RFPercentage(2)}px;
`;

export const Total = styled(SectionData)`
  margin-top: ${RFPercentage(1)}px;
  margin-bottom: ${RFPercentage(3)}px;
`;

export const Label = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.ms_900}
  letter-spacing: 1px;
  font-size: ${RFValue(12)}px;
`;

export const Value = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.ms_600}
  letter-spacing: 1px;
  font-size: ${RFValue(14)}px;
`;
