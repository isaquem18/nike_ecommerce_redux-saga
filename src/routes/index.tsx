import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { LoginPage } from '../screens/Onboard/LoginPage';
import { ProductDetails } from '../screens/Logged/ProductDetails';
import { Cart } from '../screens/Logged/Cart';
import { useTheme } from 'styled-components';

import { MainProductList } from '../screens/Logged/MainProductList';
import {
  DrawerRightIconContainer,
  DrawerLeftIconContainer,
  CartDrawerIcons,
  MenuDrawerIcons
} from './styles';


const {
  Navigator,
  Screen
} = createSharedElementStackNavigator();

export function Routes (params: any) {
  const theme = useTheme();
  const { navigate } = useNavigation<any>();


  const handleBackButton = () => {
    navigate('MainProductList');
  };

  const handleCartIconClick = () => {
    navigate('Cart')
  }

  const handleNavigationIconClick = () => {
    
  }

  return (
    <Navigator screenOptions={{

    }}
    >
      <Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }}/>
      <Screen name="MainProductList" component={MainProductList} options={{
        gestureEnabled: false,
        headerTitle: '',
        headerStyle: {
          backgroundColor: theme.colors.bg,
          shadowColor: 'transparent',
          height: Platform.OS === 'ios' ? (
            getStatusBarHeight() + RFPercentage(12)
          ) : (
            RFPercentage(15)
          ),
        },
        headerLeft: () => (
          <DrawerLeftIconContainer onPress={handleNavigationIconClick}>
            <MenuDrawerIcons />
          </DrawerLeftIconContainer>
        ),
        headerRight: () => (
          <DrawerRightIconContainer onPress={handleCartIconClick}>
            <CartDrawerIcons />
          </DrawerRightIconContainer>
        ),
        headerLeftContainerStyle: {
          paddingTop: getStatusBarHeight(),
          position: 'absolute',
          bottom: 0,
          left: RFPercentage(1)
        },
        headerRightContainerStyle: {
          position: 'absolute',
          bottom: 0,
          right: RFPercentage(1)
        }
      }}/>


      <Screen name="ProductDetails" component={ProductDetails} 
        sharedElements={(route, otherRoute, showing) => {

          if (otherRoute.name === 'MainProductList' || showing) {
            const { product } = route.params;
            return [{
              id: String(product.id),
              animation: 'move',
              resize: 'auto'
            }];
          }
        }}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.bg_product,
            shadowColor: 'transparent',
            height: Platform.OS === 'ios' ? (
              getStatusBarHeight() + RFPercentage(12)
            ) : (
              RFPercentage(15)
            ),
          },
          headerLeftContainerStyle: {
            paddingTop: getStatusBarHeight(),
            position: 'absolute',
            bottom: 0,
            left: RFPercentage(1)
          },
          headerLeft: () => (
            <DrawerRightIconContainer onPress={handleBackButton}>
              <Entypo name="chevron-left" size={24} color="black" />
            </DrawerRightIconContainer>
          )
        }}
      />
      <Screen name="Cart" component={Cart} options={{
        headerTitle: '',
        headerBackTitleVisible: false,
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: theme.colors.bg,
          shadowColor: 'transparent',
          height: Platform.OS === 'ios' ? (
            getStatusBarHeight() + RFPercentage(12)
          ) : (
            RFPercentage(15)
          ),
        },
        headerLeftContainerStyle: {
          paddingTop: getStatusBarHeight(),
          position: 'absolute',
          bottom: 0,
          left: RFPercentage(1)
        },
        headerLeft: () => (
          <DrawerRightIconContainer onPress={handleBackButton}>
            <Entypo name="chevron-left" size={24} color="black" />
          </DrawerRightIconContainer>
        )
      }}/>
    </Navigator>
  )
}