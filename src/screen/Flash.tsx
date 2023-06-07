/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {WeatherContext} from '../components/ContextProvider';
// import axiosInstance from '../utils/axiosInstance';

const Flash = ({navigation}) => {
  const {loadProducts, text} = useContext(WeatherContext);

  setTimeout(() => {
    navigation.navigate('HomePage');
  }, 2000);

  // const getData = async demo => {
  //   try {
  //     const res = await axiosInstance.get(`${demo}&days=1&aqi=no&alerts=no`);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData('');
  // }, [text]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../asserts/Images/Flash/weather.png')}
          style={{height: 100, width: 100}}
        />
      </View>
      <Image
        source={require('../asserts/Images/Flash/green-drop.png')}
        style={{height: 100, width: 100, justifyContent: 'space-around'}}
      />
    </View>
  );
};

export default Flash;
