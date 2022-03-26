import { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useDispatch } from 'react-redux';

import {
  BoxContainer,
  Container,
  Title,
  LikeButton,
  ImageContainer,
  ProductImage,
  Price
} from './styles';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  sizes: number[];
  images: string[];
  target: string;
};

interface Props {
  product: IProduct;
}

export function ProductItem ({
  product
}: Props) {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions()
  
  const { navigate } = useNavigation<any>();
    
  const formattedPrice = useMemo(() => {
    return Number(product.price).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }, [product.price]);
  
  const handleLikeButtonClick = () => {

  };

  const handleClickInTheProduct = () => {
    navigate('ProductDetails', {
      product
    });
  };
  

  return (
    <BoxContainer>
      <TouchableWithoutFeedback onPress={handleLikeButtonClick}>
        <LikeButton />
      </TouchableWithoutFeedback>
      <Container onPress={handleClickInTheProduct}>
        <ImageContainer>
          <SharedElement id={String(product.id)} style={{ flex: 1 }}>
            <Image source={{ uri: product?.images[0] }} resizeMode="contain" style={{ width: width/2, height: 130 }}/>
          </SharedElement> 
        </ImageContainer>
        <Title>{product.title}</Title>
        <Price>{formattedPrice}</Price>
      </Container>
    </BoxContainer>
  )
}
