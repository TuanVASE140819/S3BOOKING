import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const localSpas = [
    {
      name: "SHEE BROWS",
      image_url:
        "https://static.sangquan123.com/2019/03/54203901_2204305872925693_2436727924196376576_n.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      distance:"0.2km",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Vạn Sen Spa",
      image_url:
        "https://blog.dktcdn.net/files/kinh-doanh-spa-mini-can-bao-nhieu-von-1.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      distance:"0.5km",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://doanhnhantaisac.vn/wp-content/uploads/2020/08/Nguy%E1%BB%85n-Th%E1%BB%8B-Thanh-Sen-Spa-03.jpg",
      categories: ["Indian", "Bar"],
      price: "$$",
      distance:"0.4km",
      reviews: 700,
      rating: 4.9,
    },
    {
      name: "India's Grill",
      image_url:
        "https://doanhnhantaisac.vn/wp-content/uploads/2020/08/Nguy%E1%BB%85n-Th%E1%BB%8B-Thanh-Sen-Spa-03.jpg",
      categories: ["Indian", "Bar"],
      price: "$$",
      distance:"0.4km",
      reviews: 700,
      rating: 4.9,
    },
    {
      name: "India's Grill",
      image_url:
        "https://doanhnhantaisac.vn/wp-content/uploads/2020/08/Nguy%E1%BB%85n-Th%E1%BB%8B-Thanh-Sen-Spa-03.jpg",
      categories: ["Indian", "Bar"],
      price: "$$",
      distance:"0.4km",
      reviews: 700,
      rating: 4.9,
    },
  ];

export default function SpaItems() {
    return (
      <>
        <TouchableOpacity
          activeOpacity={1}
          style={{ marginBottom: 30 }}>
          {localSpas.map((spa,index)=>(
           <View
           style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
         >
           <SpaImage image={spa.image_url} />
           <SpaInfo name={spa.name} rating={spa.rating} distance={spa.distance} />
         </View>
          ))}     
        </TouchableOpacity>
        </>
  );
}

const SpaImage = (props) => (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
  
  const SpaInfo = (props) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>{props.distance}</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
  
