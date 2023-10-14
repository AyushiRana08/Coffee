import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { coffeeItems } from '../Const/index'; 
import {themeColors} from '../theme/index';

const FavouriteScreen = () => {
  
  const favoriteItemIds = [1, 3]; 
  const favoriteItems = coffeeItems.filter(item => favoriteItemIds.includes(item.id));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Favorite Coffees</Text>
      <FlatList
        data={favoriteItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
    backgroundColor: 'yellowwhite',
  },
  heading: {
    fontSize: 24,
    color: themeColors.bgDark,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
    backgroundColor: themeColors.bgLight,
    borderRadius: 20,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 25,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: themeColors.bgDark,
  },
  itemPrice: {
    fontSize: 16,
    paddingLeft: 10,
    color: themeColors.bgDark,
  },
});

export default FavouriteScreen;
