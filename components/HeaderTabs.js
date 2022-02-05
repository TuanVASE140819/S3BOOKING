import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

export default function HeaderTabs() {
    const[activeTab, setActiveTab]= useState("Delivery");
  return (
    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
      <HeaderButton
       text="Thông Báo" 
       btnColor="black"
       textColor="white" 
       activeTab={activeTab} 
       setActiveTab={setActiveTab}
       />
      <Image source={require("../assets/images/logo.png")}
      style={{
        width: 100,
        height: 30,
      }} />
      <HeaderButton 
      text="Tài Khoản"
      btnColor="white" 
      textColor="black"
      activeTab={activeTab} 
      setActiveTab={setActiveTab}/>
    </View>
  );
}

const HeaderButton =(props)=>(
        <TouchableOpacity 
        style={{
            backgroundColor:props.activeTab === props.text ? "#ED9999": "white",  
            paddingVertical:6,
            paddingHorizontal:16, 
            borderRadius:30,
        }}
        onPress={()=> props.setActiveTab(props.text)}
        >
            <Text style={{color:props.activeTab === props.text ? "white":"#ED9999",fontSize:15, fontWeight:"900"}}
            >{props.text}
            </Text>
        </TouchableOpacity> 
);
    