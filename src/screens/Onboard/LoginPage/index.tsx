import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { FilledButton } from '../../../components/FilledButton';
import {
  Container,

} from './styles';

export function LoginPage () {
  const {navigate} = useNavigation<any>();

  const handleLoginButton = () => {
    navigate('MainProductList');
  }

  return (
    <Container>
      <FilledButton onPress={handleLoginButton}/>
    </Container>
  )
}