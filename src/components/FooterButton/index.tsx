import React, { SVGProps } from 'react';
import {
  Container,
  Title
} from './styles';

interface ContainerProps {
  bgColor?: string;
  icon?: SVGProps<React.FC>;
  title?: string;
  handlePress?: () => void;
  marginBottom?: number;
};

export function FooterButton (
  { bgColor = '#000', icon, title='', handlePress, marginBottom=0 } : ContainerProps
) {

  return (
    <Container bgColor={bgColor} onPress={handlePress} marginBottom={marginBottom}>
      <Title>{title}</Title>
      {icon}
    </Container>
  )
};