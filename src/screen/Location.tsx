/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, Image, Pressable, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {WeatherContext} from '../components/ContextProvider';

const Location = ({navigation}) => {
  const {duration, sunrise, sunset, weatherData} = useContext(WeatherContext);
  const DATA = [
    {
      time: '12 AM',
      temp: 23.8,
    },
    {
      time: '1 AM',
      temp: 23.4,
    },
    {
      time: '2 AM',
      temp: 22.2,
    },
    {
      time: '3 AM',
      temp: 22.9,
    },
    {
      time: '4 AM',
      temp: 22.5,
    },
    {
      time: '5 AM',
      temp: 23.0,
    },
    {
      time: '6 AM',
      temp: 23.3,
    },
    {
      time: '7 AM',
      temp: 23.6,
    },
    {
      time: '8 AM',
      temp: 23.8,
    },
    {
      time: '9 AM',
      temp: 23.2,
    },
    {
      time: '10 AM',
      temp: 23.1,
    },
  ];
  const DATA1 = [
    {
      title1: 'Sunrise',
      info1: '05:53 AM',
    },
    {
      title1: 'Wind',
      info1: '13 km/h',
    },
    {
      title1: 'Precipitation',
      info1: '0 mm',
    },
  ];

  const DATA2 = [
    {
      title2: 'Sunset',
      info2: '06:43 PM',
    },
    {
      title2: 'Pressure',
      info2: '1016 mb',
    },
    {
      title2: 'Humidity',
      info2: '70%',
    },
  ];
  console.log(weatherData);

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#ABE9FF', '#7CB0FC', '#5B9CFA']}>
      <View>
        <Pressable onPress={() => navigation.navigate('HomePage')}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../asserts/Images/Home/down-arrow.png')}
              style={{...styles.arrow, width: 30, height: 30, opacity: 0.7}}
            />
          </View>
        </Pressable>
        <View style={{marginBottom: 30}}>
          <Text style={{...styles.date, fontSize: 25}}>{weatherData.Name}</Text>
          <Text style={styles.date}>{weatherData.country}</Text>
        </View>

        <View>
          <FlatList
            data={duration}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{alignItems: 'center', paddingHorizontal: 10}}>
                <Text style={styles.data1}>{item.time}</Text>
                <Text style={styles.data2}>{item.temp}&deg;</Text>
              </View>
            )}
          />
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 40,
          }}>
          <Text style={{color: '#FFFFFF'}}>Saturday</Text>
          <Image
            source={{uri: `https:${weatherData.img}`}}
            style={{height: 30, width: 30}}
          />
          <Text style={{color: '#FFFFFF'}}>{weatherData.temp}&deg;</Text>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={require('../asserts/Images/Home/down-arrow.png')}
              style={styles.arrow}
            />
            <Text style={{color: '#FFFFFF'}}>{weatherData.minTemp}&deg;</Text>
          </View>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={require('../asserts/Images/Home/up-arrows.png')}
              style={styles.arrow}
            />
            <Text style={{color: '#FFFFFF'}}>{weatherData.maxTemp}&deg;</Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: '#FFFFFF'}}>Sunday</Text>
          <Image
            source={{uri: `https:${weatherData.img1}`}}
            style={{height: 30, width: 30}}
          />
          <Text style={{color: '#FFFFFF'}}>{weatherData.temp1}&deg;</Text>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={require('../asserts/Images/Home/down-arrow.png')}
              style={styles.arrow}
            />
            <Text style={{color: '#FFFFFF'}}>{weatherData.minTemp1}&deg;</Text>
          </View>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={require('../asserts/Images/Home/up-arrows.png')}
              style={styles.arrow}
            />
            <Text style={{color: '#FFFFFF'}}>{weatherData.maxTemp1}&deg;</Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 40,
          }}>
          <Text style={{color: '#FFFFFF'}}>Monday</Text>
          <Image
            source={{uri: `https:${weatherData.img2}`}}
            style={{height: 30, width: 30}}
          />
          <Text style={{color: '#FFFFFF'}}>{weatherData.temp2}&deg;</Text>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={require('../asserts/Images/Home/down-arrow.png')}
              style={styles.arrow}
            />
            <Text style={{color: '#FFFFFF'}}>{weatherData.minTemp2}&deg;</Text>
          </View>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={require('../asserts/Images/Home/up-arrows.png')}
              style={styles.arrow}
            />
            <Text style={{color: '#FFFFFF'}}>{weatherData.maxTemp2}&deg;</Text>
          </View>
        </View>

        <View>
          <FlatList
            data={sunrise}
            horizontal
            renderItem={({item}) => (
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.info}>{item.times}</Text>
              </View>
            )}
          />
        </View>

        <View>
          <FlatList
            data={sunset}
            horizontal
            renderItem={({item}) => (
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.info}>{item.times}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  arrow: {
    tintColor: 'white',
    height: 18,
    width: 18,
    marginLeft: 7,
  },
  date: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
  data1: {
    color: '#FFFFFF',
    fontSize: 12,
    paddingVertical: 15,
  },
  data2: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingBottom: 15,
  },
  title: {
    paddingTop: 40,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    opacity: 0.7,
  },
  info: {
    paddingTop: 20,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: 20,
  },
});
export default Location;
