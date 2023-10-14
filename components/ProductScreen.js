import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { themeColors } from '../theme/index';
import { useNavigation } from '@react-navigation/native';

export default function ProdictScreen(props) {
  const navigation = useNavigation();
  const item = props.route.params;
  const [size, setSize] = useState('small');
  const [set, getSet] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <View
      style={{
        flex: 2,
      }}>
      <StatusBar style="light" />
      <Image
        source={require('../assets/beansBackground2.png')}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          width: '100%',
          position: 'absolute',
        }}
      />
      <SafeAreaView style={{ marginVertical: 4 }}>
        <View
          style={{
            marginHorizontal: 4,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="reply" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setLiked(true)}
            style={{
              borderRadius: 999,
              overflow: 'visible',
              borderColor: 'white',
              borderWidth: 2,
              padding: 10,
              backgroundColor: liked ? 'rgba(210,39,48,0.5)' : '',
            }}>
            <Icon
              name="heart"
              size={10}
              style={{ fontSize: 32, color: liked ? 'red' : 'white' }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
          }}>
          <Image source={item.image} style={{ height: 260, width: 260 }} />
        </View>
        <View
          style={{
            backgroundColor: themeColors.bgLight,
            margin: 15,
            borderRadius: 20,
            padding: 4,
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
            paddingHorizontal: 15,
            marginTop: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              fontWeight: 'bold',
              zIndex: 10,
            }}>
            {item.name}
          </Text>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
            ${item.price}
          </Text>
        </View>
        <View
          style={{ marginHorizontal: 4, paddingHorizontal: 10, marginTop: 20 }}>
          <Text
            style={{
              color: themeColors.text,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Coffee Size :
          </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => setSize('small')}
              style={{
                paddingHorizontal: 30,
                paddingVertical: 8,
                borderRadius: 999,
                backgroundColor:
                  size == 'small' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
              }}>
              <Text
                syle={{
                  color: size == 'small' ? 'white' : 'gray-700',
                  fontWeight: 'bold',
                }}>
                Small
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSize('medium')}
              style={{
                paddingHorizontal: 30,
                paddingVertical: 8,
                borderRadius: 999,
                backgroundColor:
                  size == 'medium' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
              }}>
              <Text
                syle={{
                  color: size == 'medium' ? 'white' : 'gray-700',
                  fontWeight: 'bold',
                }}>
                Medium
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSize('large')}
              style={{
                paddingHorizontal: 30,
                paddingVertical: 8,
                borderRadius: 999,
                backgroundColor:
                  size == 'large' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
              }}>
              <Text
                syle={{
                  color: size == 'large' ? 'white' : 'gray-700',
                  fontWeight: 'bold',
                }}>
                Large
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginVertical: 4,
            marginTop: 4,
            height: 100,
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              color: themeColors.text,
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 4,
            }}>
            About
          </Text>
          <Text style={{ color: 'gray-700', marginTop: 4 }}>{item.desc}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 4,
            marginBottom: 2,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                fontWeight: 'bold',
                opacity: 0.6,
              }}>
              Volume:
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                fontWeight: 'bold',
                padding: 5,
              }}>
              {item.volume}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 4,
              borderRadius: 999,
              borderWidth: 2,
              borderColor: themeColors.bgDark,
              overflow: 'visible',
              padding: 1,
              paddingHorizontal: 10,
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                if (set <= 0) {
                  getSet(0);
                } else {
                  getSet((set1) => set1 - 1);
                }
              }}
              style={{ paddingHorizontal: 10, paddingVertical: 8 }}>
              <Icon
                name="minus"
                style={{ fontWeight: 'bold' }}
                size={20}
                color={themeColors.bgDark}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bolder',
                fontSize: 20,
                color: themeColors.text,
                padding: 10,
              }}>
              {set}
            </Text>
            <TouchableOpacity
              onPress={() => {
                getSet((set1) => set1 + 1);
              }}
              style={{ paddingHorizontal: 10, paddingVertical: 8 }}>
              <Icon
                name="plus"
                style={{ fontWeight: 'bold' }}
                size={20}
                color={themeColors.bgDark}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 50,
            paddingHorizontal: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 999,
              overflow: 'visible',
              borderWidth: 2,
              borderColor: themeColors.bgLight,
              backgroundColor: themeColors.bgDark,
            }}>
            <Icon name="shopping-cart" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 999,
              overflow: 'visible',
              borderWidth: 2,
              borderColor: themeColors.bgLight,
              backgroundColor: themeColors.bgDark,
              flex: 1,
              marginLeft: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

// const style =StyleSheet.create({
//   press: {
//     color: 'red',
//   }
// })
