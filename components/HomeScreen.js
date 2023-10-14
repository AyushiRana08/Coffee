import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CoffeeCard from './CoffeeCard';
import { themeColors } from '../theme/index';
import { categories, coffeeItems } from '../Const/index';
import Carousel from 'react-native-snap-carousel';

export default function HomeScreen() {
  const [cate, setCate] = useState(1);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar />
      <Image
        source={require('../assets/beansBackground1.png')}
        style={{
          width: '100%',
          position: 'absolute',
          top: -10,
          height: 200,
          opacity: 0.19,
        }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            paddingHorizontal: 16,
            flexDirection: 'row',
            alignItems: 'Left',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Image
            source={require('../assets/avatar.png')}
            style={{ height: 50, width: 50, borderRadius: 25 }}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="map-pin" size={20} color={themeColors.bgDark} />
            <Text style={{ fontSize: 19, fontWeight: 'bold', margin: 10 }}>
              Gujarat,India
            </Text>
          </View>
          <Icon name="bell" size={30} color={themeColors.bgDark} />
        </View>
        <View
          style={{
            marginHorizontal: 5,
            marginTop: 14,
            flexDirection: 'row',
            justifyContent: '',
          }}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#e6e6e6',
            }}>
              <TextInput
                placeholder="Search Here....."
                style={{
                  padding: 16,
                  fontSize:20,
                  flex: 1,
                  width: 350,
                  fontWeight: '600',
                  color: 'white',
                  backgroundColor: 'lightgray',
                  borderColor: 'white',
                  borderRadius: 30,
                  opacity: 0.7,
                  marginLeft:10,
                }}
              />
          </View>
        </View>

        {/* Categories FlatList */}
        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 24,
          }}>
          <FlatList
            horizontal
            showsVerticalScrollIndicator={true}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              let isActive = item.id === cate;
              let activeTextClass = isActive
                ? styles.textWhite
                : styles.textGray700;
              return (
                <TouchableOpacity
                  onPress={() => setCate(item.id)}
                  style={[
                    styles.categoryButton,
                    {
                      backgroundColor: isActive
                        ? themeColors.bgLight
                        : 'rgba(217,217,214,0.9)',
                    },
                  ]}>
                  <Text style={[styles.categoryText, activeTextClass]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* CoffeeItems Carousel */}
        
        <View style={{marginTop: 60, paddingVertical: 20,}}>
        
          <Carousel
          containerCustomStyle={{overflow: 'visible'}}
            data={coffeeItems}
            loop={true}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = {
  textWhite: { color: 'white' },
  textGray700: { color: themeColors.bgDark},
  categoryButton: {
    padding: 16,
    paddingHorizontal: 20,
    borderRadius: 999,
    marginRight: 8,
    marginTop: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: themeColors.bgDark,
  },
  categoryText: {
    fontWeight: 'bold',
  },
};
