import { IProduct } from "../../../components/ProductItem";

export function addProductToCart(product: IProduct, quantity: number) {

  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      item: product,
      quantity
    }
  }
};

export function updateQuantityProductIntoTheCart(product: IProduct, quantity: number) {

  return {
    type: 'UPDATE_PRODUCT_QUANTITY_INTO_THE_CART',
    payload: {
      item: product,
      quantity: quantity
    }
  }
};


export function deleteProductToTheCart(id: number) {

  return {
    type: 'DELETE_PRODUCT_TO_THE_CART',
    payload: {
      item: {
        id
      },
    }
  }
};



