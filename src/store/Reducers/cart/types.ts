import { IProduct } from "../../../components/ProductItem";

export interface IAction {
  type: string;
  payload: ICartStateItem;
};

export type ICartState = ICartStateItem[];

export interface ICartStateItem {
  item: IProduct;
  quantity: number;
};

