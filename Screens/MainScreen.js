import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import SpaItems from '../components/SpaItems';
import Advise from '../components/Advise';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/BottomTabs';

export default function MainScreen() {
  return (
    <SafeAreaView style={{ flex: 1}}>
        <View style={{backgroundColor:"white", padding:15 }}>
            <HeaderTabs/>
            <SearchBar/>
            </View> 
            <ScrollView showsVerticalScrollIndicator={false}> 
            <Categories/>
            <Advise/>
            <SpaItems/>
            </ScrollView>
            <Divider width={1} />
      <BottomTabs />
        
    </SafeAreaView>
  );
}
