import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { itemsInCart } from '../Const/index'; 
import {themeColors} from '../theme/index'

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(itemsInCart);

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.cartItemImage} />
              <View style={styles.cartItemInfo}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>${item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
                <Icon name="trash" size={20} color={themeColors.bgDark} />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      {cartItems.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>${calculateTotalPrice().toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 15,
    backgroundColor: 'yellowwhite',
    color: themeColors.bgDark,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: themeColors.bgDark,
  },
  emptyCartText: {
    fontSize: 16,
    color: 'gray',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cartItemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cartItemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.bgDark,
  },
  cartItemPrice: {
    fontSize: 16,
    color: themeColors.bgDark,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'lightgray',
    paddingTop: 12,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 20,
    color: 'black',
  },
});

export default CartScreen;
