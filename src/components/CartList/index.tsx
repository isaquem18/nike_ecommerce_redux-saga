import { useMemo } from 'react';
import { ProductIntoTheCart } from '../ProductIntoTheCart';
import { useSelector } from 'react-redux';

import { IStore } from '../../store/rootReducer';
import { ICartState, ICartStateItem } from '../../store/Reducers/cart/types';
import {
  Container,
  PurchaseInformation,
  SubTotal,
  Freight,
  Total,
  Label,
  Value,
  Divider
} from './styles';


export function CartList () {
  const Cart = useSelector<IStore, ICartState>(state => state.Cart);


  const FormatedValues = useMemo(() => {

    let SubTotalPriceValue = Cart.reduce((acumulator, item) => acumulator += item.item.price * item.quantity, 0).toString();
    let totalValue = String(Number(SubTotalPriceValue) + 23);

    SubTotalPriceValue = Number(SubTotalPriceValue).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    totalValue = Number(totalValue).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    return {
      subTotal: SubTotalPriceValue,
      total:totalValue
    };

  }, [Cart]);


  
  return (
    <>
      <Container>
        {Cart?.map((product) => (
          <ProductIntoTheCart 
            key={product.item.id.toString()} 
            product={product}/>
        ))}
      </Container>
      {Cart.length > 0 && (
        <PurchaseInformation>
          <SubTotal>
            <Label>Subtotal:</Label>
            <Value>{FormatedValues?.subTotal}</Value>
          </SubTotal>
          <Freight>
            <Label>Frete:</Label>
            <Value>R$ 23,00</Value>
          </Freight>
          <Divider />
          <Total>
            <Label>Total:</Label>
            <Value>{FormatedValues?.total}</Value>
          </Total>
        </PurchaseInformation>
      )}
    </>
  )
}