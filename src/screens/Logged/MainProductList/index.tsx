import { useRef, useMemo, useCallback } from 'react';
import { StatusBar, Platform } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

import { MainTitle } from '../../../components/MainTitle';
import { ShoesHomeFlatList } from '../../../components/ShoesHomeFlatList';
import {
  Container,
  Footer,
  Filter,
  Order,
  FilterIcon,
  FilterText,
  OrderIcon,
  OrderText
} from './styles';
import { css } from 'styled-components/native';

export function MainProductList ({
  passDrawerNavigationEvent
}: any) {

  const footerHeight = useSharedValue(RFPercentage(12));
  const footerTranslateYText = useSharedValue(0);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [RFPercentage(14), RFPercentage(60)], []);


  const footerAnimatedHeight = useAnimatedStyle(() => {
    return {
      height: footerHeight.value,
    }
  })

  const footerAnimatedMargin = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: footerTranslateYText.value }]
    }
  })



  const handleSheetChanges = useCallback((index: number) => {

    index === 1 ? footerHeight.value = withSpring(RFPercentage(5), { mass: 0.3 }) 
    : footerHeight.value = withSpring(RFPercentage(12), { mass: 0.3 });

    index === 1 ? footerTranslateYText.value = withSpring(0, { mass: 0.3 }) 
    : footerTranslateYText.value = withSpring(-RFPercentage(2), { mass: 0.3 });


  }, []);


  return (
    <>  
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
      <Container>
        <MainTitle text="Nova coleção"/>
        <ShoesHomeFlatList />
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enableOverDrag={false}
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 10
          }}
        >
          <Footer style={footerAnimatedHeight}>
            <Filter>
              <Animated.View style={[{ flexDirection: 'row', alignItems: 'center' }, footerAnimatedMargin]}>
                <FilterIcon />
                <FilterText>FILTRAR</FilterText>
              </Animated.View>
            </Filter>
            <Order>
              <Animated.View style={[{ flexDirection: 'row', alignItems: 'center' }, footerAnimatedMargin]}>
                <OrderIcon/>
                <OrderText>ORDENAR</OrderText>
              </Animated.View>
            </Order>
          </Footer>
        </BottomSheet>
      </Container>
    </>
  )
}