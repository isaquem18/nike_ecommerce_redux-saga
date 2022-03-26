import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const LoginButton = styled(RectButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.orange_700};
  height: ${RFPercentage(7)}px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 0;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.ubuntu_700}
`;
