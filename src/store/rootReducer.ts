import { combineReducers } from 'redux';

//REDUCERS
import Cart from './Reducers/cart/reducer';
import { ICartState } from './Reducers/cart/types';


export default combineReducers({ 
  Cart
});

export interface IStore {
  Cart: ICartState;
}