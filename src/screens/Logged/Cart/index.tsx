import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

import { AntDesign } from '@expo/vector-icons';
import { CartList } from '../../../components/CartList';
import { FooterButton } from '../../../components/FooterButton';
import { MainTitle } from '../../../components/MainTitle';

//TYPES
import { ICartState } from '../../../store/Reducers/cart/types';
import { IStore } from '../../../store/rootReducer';

import {
  Container
} from './styles';



export function Cart () {
  const theme = useTheme();
  const cart = useSelector<IStore, ICartState>(state => state.Cart);

  const cartLength = useMemo(() => cart.length, [cart]);

  const handleBuyIsDone = () => {


  };

  return (
    <Container>
      <MainTitle text={`Sua sacola (${cartLength})`}/>
      <CartList />
      <FooterButton 
        bgColor={theme.colors.gray_800}
        title="FINALIZAR COMPRA"
        icon={<AntDesign name="arrowright" size={24} color="#fff" />}
        handlePress={handleBuyIsDone}
      />
    </Container>
  )
}