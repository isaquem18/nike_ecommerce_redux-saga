import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantityProductIntoTheCart, deleteProductToTheCart } from '../../store/Reducers/cart/actions';
import { ICartState, ICartStateItem } from '../../store/Reducers/cart/types';
import { IStore } from '../../store/rootReducer';
import {
  Container,
  ProductImage,
  ProductDetails,
  Name,
  Size,
  QuantityInput,
  Plus,
  Quantity,
  Minus,
  QuantityButtonText,
  TrashIcon,
  TrashButton
} from './styles';

interface Props {
  product: ICartStateItem;
}

export function ProductIntoTheCart ({
  product
}: Props) {
  const dispatch = useDispatch();
  const [ ProductIntoTheCart ] = useSelector<IStore, ICartStateItem[]>(state => state.Cart.filter(p => p.item.id === product.item.id));

  const changeQuantityIntoTheCart = (operator: string) => {
    if (operator === 'minus' && ProductIntoTheCart.quantity === 0) return;

    if (operator === 'minus' && ProductIntoTheCart.quantity === 1) {
      handleDeleteItemFromTheCart(product.item.id);
      return;
    };

    if (operator === 'plus') {
      dispatch(updateQuantityProductIntoTheCart(product.item, ProductIntoTheCart.quantity+1))
    } else {
      dispatch(updateQuantityProductIntoTheCart(product.item, ProductIntoTheCart.quantity-1))
    }

  }

  const handleDeleteItemFromTheCart = (id: number) => {
    Alert.alert('Exclusão', 'Tem certeza que deseja excluir este item?', [
      {
        text: 'Confirmar',
        onPress: () => {
          dispatch(deleteProductToTheCart(product.item.id))
        }
      },
      {
        text: 'Cancelar',
        onPress: () => {

        }
      }
    ])
   
  }


  return (
    <Container>
      <ProductImage source={{ uri: product.item.images[0] }} />
      <ProductDetails>
        <Name>{product.item.title}</Name>
        <Size>33 34 35 41</Size>
        <QuantityInput>
          <Plus onPress={() => changeQuantityIntoTheCart('plus')}><QuantityButtonText>+</QuantityButtonText></Plus>
          <Quantity value={String(ProductIntoTheCart?.quantity)}/>
          <Minus onPress={() => changeQuantityIntoTheCart('minus')}><QuantityButtonText>-</QuantityButtonText></Minus>
        </QuantityInput>
        <TrashButton
          onPress={() => handleDeleteItemFromTheCart(product.item.id)}
        ><TrashIcon /></TrashButton>
      </ProductDetails>
    </Container>
  )
}