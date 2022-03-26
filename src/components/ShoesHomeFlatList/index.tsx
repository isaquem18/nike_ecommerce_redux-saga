import { useCallback, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


import { IProduct, ProductItem } from '../ProductItem';
import api from '../../api';
import {
  ShoesList,
  ErrorMessageLoadList
} from './styles';


interface Props {
  products: IProduct[];
}


export function ShoesHomeFlatList () {

  const [ shoesList, setShoesList ] = useState<IProduct[]>([] as IProduct[]);
  const [ isLoaded, setIsLoaded ] = useState(false);
  let mounted: boolean;


  useFocusEffect(useCallback(() => {
    mounted = true;
  
    loadData();

    return () => mounted = false;  
  }, []));


  const loadData = async () => {

    try {

      const response = await api({
        method: 'GET',
        url: '/products'
      });
  
      if (mounted) {
        setShoesList(response?.data ?? []);
        setIsLoaded(true);
      }

    } catch (e) {
      if (mounted) {
        setIsLoaded(true);
      }

    }

  };


  return (
    <ShoesList 
      data={shoesList}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <ProductItem product={item} />
      )}
      ListEmptyComponent={() => {
        return isLoaded ? <ErrorMessageLoadList>Não foi possível carregar nenhum item</ErrorMessageLoadList> : <ActivityIndicator />
      }}
    />
  )
}
