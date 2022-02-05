import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const items = [
  // {
  //   image: require("../assets/icons/DatLich.png"),
  //   text: "Đặt Lịch"
  // },
  {
    image: require("../assets/icons/LichSu.png"),
    text: "Lịch Sử"
  },
  {
    image: require("../assets/icons/Member.png"),
    text: "SpaMember"
  },
  {
    image: require("../assets/icons/Rewards.png"),
    text: "Rewards"
  },

  {
    image: require("../assets/icons/Rewards.png"),
    text: "Rewards"
  },
];
export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} 
            style={{alignItems:
           'center',
            marginRight: 30,
            }}>
              <View style={{
                backgroundColor:"#ED9999",
                borderRadius:100,
                padding:10,
              }}>
              <Image
              
              source={item.image}
              style={{
                width: 40,
                height: 40,
                resizeMode: 'contain',
              }}
            />
              </View>
            
            <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
}
