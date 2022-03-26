import { Pressable, TouchableWithoutFeedback } from 'react-native';
import {
  LoginButton,
  LoginButtonText
} from './styles';

interface Props {
  onPress: () => void;
}

export function FilledButton ({
  onPress
}: Props) {

  return (
    <LoginButton onPress={onPress}>
      <LoginButtonText>Entrar</LoginButtonText>
    </LoginButton>
  )
}