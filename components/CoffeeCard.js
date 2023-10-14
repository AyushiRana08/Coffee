import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { themeColors } from '../theme/index';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function CoffeeCard({ item }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: 350, // Increase the height to accommodate the extended content
        width: 240,
        overflow: 'visible', // Allow content to overflow the container
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          shadowColor: 'black',
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: -50, // Remove this marginTop
          overflow: 'visible', // Allow content to overflow the container
        }}>
        <Image
          source={item.image}
          style={{ height: 150, width: 150 }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          marginTop: 25,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            zIndex: 10,
          }}>
          {item.name}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          margin: 15,
          borderRadius: 20,
          padding: 3,
          paddingHorizontal: 2,
          flexDirection: 'row',
          alignItems: 'center',
          width: 50,
        }}>
        <Icon name="star" size={15} color="white" />
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>
          {item.stars}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 1,
          paddingHorizontal: 2,
          zIndex: 10,
          marginBottom: 6,
          paddingLeft: 10,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: 'bold',
            opacity: 0.6,
          }}>
          Volume:
        </Text>
        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
          {item.volume}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: themeColors.bgDark,
          shadowColor: themeColors.bgDark,
          shadowRadius: 25,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
          marginTop: 50,
          paddingHorizontal: 10,
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>
          ${item.price}
        </Text>
        <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('Product',{...item})}>
          <Icon name="plus" style={styles.plusIcon} size={25} color={themeColors.bgDark} />
        </TouchableOpacity>
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    padding: 8,
    borderRadius: 9999,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 40,
    shadowOffset: { width: -20, height: -10 },
    shadowOpacity: 1,
  },
  plusIcon: {
    fontWeight: 'bold',
  },
});