import { ICartStateItem, IAction } from './types';
import produce from 'immer';

let INITIAL_VALUE: ICartStateItem[] = [];

export default function Cart (state=INITIAL_VALUE, action: IAction) {

  return produce(state, draft => {

    const getIndex = state.findIndex(product => product.item.id === action.payload.item.id);

    switch (action.type) {


      case 'ADD_PRODUCT_TO_CART': {

        const getIndex: number = state.findIndex((product) => product.item.id === action.payload.item.id);

        if (getIndex >= 0) {

          draft[getIndex] = {
            item: action?.payload?.item,
            quantity: draft[getIndex].quantity + action?.payload?.quantity
          };

        } else {

          draft.push(action.payload);        

        }
        break;
      }


      case 'UPDATE_PRODUCT_QUANTITY_INTO_THE_CART': {

        draft[getIndex] = { item: action.payload.item, quantity: action.payload.quantity };

        break;

      }

      case 'DELETE_PRODUCT_TO_THE_CART': {

        const id = action.payload.item.id;
        draft.splice(getIndex, 1);

        break;
      }


      default: {
        return draft;
      }

    }


  });
};