import { useMemo, useState, useCallback, useRef } from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Portal } from '@gorhom/portal';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  runOnJS
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';


import { Image, Platform, useWindowDimensions } from 'react-native';
import { FooterButton } from '../../../components/FooterButton';
import { addProductToCart } from '../../../store/Reducers/cart/actions';
import {
  Container,
  ImageContainer,
  ScrollViewGallery,
  NameBox,
  ProductName,
  ProductTarget,
  PriceBox,
  Price,
  PriceInstallments,
  AddedToCartMessageBox,
  AddedToCartMessage,
  Overlay,
  CloseBoxButton,
  CloseFooterSlideUp
} from './styles';


export function ProductDetails ({route: { params: { product } }}: any) {

  const [ addedProduct, setAddedProduct ] = useState(false);
  const [ imageXOffset, setImageXOffset ] = useState(0);
  const scrollRef = useRef<any>();
  const { width, height } = useWindowDimensions();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { navigate } = useNavigation<any>();

  const addedTranslationY = useSharedValue(RFPercentage(50));
  const addToCartTranslationY = useSharedValue(RFPercentage(0));

  useFocusEffect(useCallback(() => {

    addToCartTranslationY.value = withSpring(0, { mass: 0.3 });

    return () => addToCartTranslationY.value = withSpring(RFPercentage(15), { mass: 0.3 });
  }, []))

  const positionAddedYAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: addedTranslationY.value }]
    }
  });


  const positionAddToCartYAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: addToCartTranslationY.value }]
    }
  });


  const formattedPrice = useMemo(() => Number(product.price).toLocaleString('pt-BR', {

    style: 'currency',
    currency: 'BRL'

  }), [product.price]);

  
  const formattedPriceInstallments = useMemo(() => Number(product.price/5).toLocaleString('pt-BR', {

    style: 'currency',
    currency: 'BRL'

  }), [product.price]);


  const formattedTarget = (() => {

    if (product?.target === 'm') return 'Masculino'; 
    else if (product?.target === 'f') return 'Feminino';
    else return 'Unissex';

  })();


  useFocusEffect(useCallback(() => {
    
    return () => setAddedProduct(false);
  }, []))


  const handleAddToCart = () => {

    dispatch(addProductToCart(product, 1));
    addToCartTranslationY.value = withSpring(RFPercentage(15), { mass: 0.3 });

    setAddedProduct(true);

    addedTranslationY.value = withSpring(0, {
      mass: 0.3
    });

  };


  const handleKeepBuying = () => {

    navigate('MainProductList');

  };


  const handleGoToCart = () => {

    navigate('Cart');

  };

  
  const handleCloseFooterSlideUp = () => {
    addedTranslationY.value = withSpring(height/2, {

      mass: 0.3

    }, () => {
      runOnJS(setAddedProduct)(false);
      addToCartTranslationY.value = withSpring(0, { mass: 0.3 });
    });

  };


  const handleScroll = (currentValue: number) => {
    scrollRef?.current?.scrollTo({ x: currentValue, y: 0, animated: true });
  };

  
  const onGestureEvent = Gesture.Pinch()
  .onUpdate((e) => {
    console.log(e);
  })
  .onEnd((e) => {
    console.log(e);
  });
    
  return (
    <>
      <Container>
        <GestureDetector gesture={onGestureEvent}>
          <ImageContainer pointerEvents="box-none">
            <ScrollViewGallery
              ref={scrollRef}
            >
              <SharedElement id={String(product.id)}>
                <Image source={{ uri: product.images[0] }} resizeMode="contain" style={{ width, height: 300 }} />
              </SharedElement>
              {
                  product.images.slice(1).map((p: any) => (
                    <Image source={{ uri: p }} resizeMode="contain" style={{ width, flex: 1 }} key={p} />
                  ))
              }
            </ScrollViewGallery>
          </ImageContainer>
        </GestureDetector>
        <NameBox>
          <ProductName>{product?.title}</ProductName>
          <ProductTarget>{formattedTarget}</ProductTarget>
        </NameBox>
        <PriceBox>
          <Price>{formattedPrice}</Price>
          <PriceInstallments>Ou 5x de {formattedPriceInstallments} sem juros</PriceInstallments>
        </PriceBox>
      </Container>

      {!addedProduct &&
      
        <Animated.View style={positionAddToCartYAnimatedStyle}>
          <FooterButton 
            title="ADICIONAR À SACOLA"
            icon={<AntDesign name="arrowright" size={24} color="#fff" />}
            handlePress={handleAddToCart}
            bgColor={theme.colors.gray_800}
          />
        </Animated.View>

      }

      {addedProduct && 
      
        <Portal>
          <Overlay>
            <Animated.View style={[{flex: 1 }, positionAddedYAnimatedStyle]}>
              <AddedToCartMessageBox>
                <CloseBoxButton onPress={handleCloseFooterSlideUp}><CloseFooterSlideUp /></CloseBoxButton>
                <AddedToCartMessage>Produto adicionado ao carrinho!</AddedToCartMessage>
              </AddedToCartMessageBox>
              <FooterButton 
                title="VER CARRINHO"
                icon={<AntDesign name="arrowright" size={24} color="#fff" />}
                handlePress={handleGoToCart}
                bgColor={theme.colors.gray_500}
                marginBottom={Platform.OS === 'ios' ? RFPercentage(12) : RFPercentage(14)}
              />

              <FooterButton 
                title="CONTINUAR COMPRANDO"
                icon={<AntDesign name="arrowright" size={24} color="#fff" />}
                handlePress={handleKeepBuying}
                bgColor={theme.colors.gray_800}
              />  
            </Animated.View>
          </Overlay>
        </Portal>

      } 
       
    </>
  )
}