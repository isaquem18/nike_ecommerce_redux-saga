import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ShoesList = (styled(FlatList).attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 12,
    paddingBottom: 300,
    paddingTop: 20,
  }
})`
  position: relative;
` as unknown) as typeof FlatList;

export const ErrorMessageLoadList = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => `${theme.colors.gray_500}50`};
  text-align: center;
  margin-top: ${RFPercentage(10)}px;
  font-family: ${ ({ theme }) => theme.fonts.ubuntu_400};
`;