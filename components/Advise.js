import { View, Text, Image } from 'react-native';
import React from 'react';

export default function advise() {
  return (
    <View  style={{
        borderRadius:20,
        height: 120,
        backgroundColor: "#ED9999",
        flexDirection:"row", 
        margin:20,
    }}>
      <Image source={require("../assets/images/tuvan.jpg")}
      style={{
        margin:20,
        width: 80,
        height: 80,
        borderRadius:20,
      }} />
      <Text style={{color:"white", paddingTop:45, fontWeight: "700",}}>Hướng dẫn chăm sóc da phù hợp với bạn</Text>
      </View>
  );
}

