import {
  Container,
  H1
} from './styles';

interface Props {
  text: string;
};

export function MainTitle ({
  text
}: Props) {

  return (
    <Container>
      <H1>{text}</H1>
    </Container>
  )
}