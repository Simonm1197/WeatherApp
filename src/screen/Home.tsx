/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
// import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {WeatherContext} from '../components/ContextProvider';
// import {WeatherContext} from '../components/ContextProvider';

const Home = ({navigation}) => {
  // const {loadProducts, weatherData} = useContext(WeatherContext);
  // const [modalVisible, setModalVisible] = useState(false);

  const {
    weatherData,
    state,
    setState,
    loadProducts,
    loadData,
    duration,
    sunrise,
    sunset,
  } = useContext(WeatherContext);

  // const [time, setTime] = useState([
  //   {
  //     time: '12 AM',
  //     temp: 23.8,
  //   },
  //   {
  //     time: '1 AM',
  //     temp: 23.4,
  //   },
  //   {
  //     time: '2 AM',
  //     temp: 22.2,
  //   },
  //   {
  //     time: '3 AM',
  //     temp: 22.9,
  //   },
  //   {
  //     time: '4 AM',
  //     temp: 22.5,
  //   },
  //   {
  //     time: '5 AM',
  //     temp: 23.0,
  //   },
  //   {
  //     time: '6 AM',
  //     temp: 23.3,
  //   },
  //   {
  //     time: '7 AM',
  //     temp: 23.6,
  //   },
  //   {
  //     time: '8 AM',
  //     temp: 23.8,
  //   },
  //   {
  //     time: '9 AM',
  //     temp: 23.2,
  //   },
  //   {
  //     time: '10 AM',
  //     temp: 23.1,
  //   },
  // ]);
  // setTime([
  //   {
  //     time: '12 AM',
  //     temp: 23.8,
  //   },
  //   {
  //     time: '1 AM',
  //     temp: 23.4,
  //   },
  //   {
  //     time: '2 AM',
  //     temp: 22.2,
  //   },
  //   {
  //     time: '3 AM',
  //     temp: 22.9,
  //   },
  //   {
  //     time: '4 AM',
  //     temp: 22.5,
  //   },
  //   {
  //     time: '5 AM',
  //     temp: 23.0,
  //   },
  //   {
  //     time: '6 AM',
  //     temp: 23.3,
  //   },
  //   {
  //     time: '7 AM',
  //     temp: 23.6,
  //   },
  //   {
  //     time: '8 AM',
  //     temp: 23.8,
  //   },
  //   {
  //     time: '9 AM',
  //     temp: 23.2,
  //   },
  //   {
  //     time: '10 AM',
  //     temp: 23.1,
  //   },
  // ]);

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

  const date = Date().toString().split(' ');

  useEffect(() => {
    const getData = setTimeout(() => {
      loadData();
    }, 3000);
    return () => clearTimeout(getData);
  }, [state]);

  // useEffect(() => {
  //   loadProducts();
  // }, []);

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#ABE9FF', '#7CB0FC', '#5B9CFA']}>
      <View>
        <View style={styles.top}>
          <TextInput
            placeholder="Seach City"
            placeholderTextColor="#4D92F7"
            style={{...styles.top_back}}
            // defaultValue={text}
            onChangeText={setState}
          />
          <Text style={styles.top_text}>&deg;C</Text>
        </View>

        <View>
          <Text style={styles.date}>
            {date[0]}, {date[1]} {date[2]}
          </Text>
          <Text style={{...styles.date, fontSize: 25}}>{weatherData.Name}</Text>
          <Text style={styles.date}>{weatherData.country}</Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 30,
          }}>
          <View style={{alignItems: 'center', gap: 10}}>
            <Text style={{fontSize: 50, color: '#FFFFFF'}}>
              {weatherData.temp}&deg;
            </Text>
            <Text style={{color: '#FFFFFF'}}>Feels Like 29.9&deg;</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../asserts/Images/Home/down-arrow.png')}
                style={styles.arrow}
              />
              <Text style={{color: '#FFFFFF', fontSize: 18, paddingLeft: 3}}>
                {weatherData.maxTemp}&deg;
              </Text>
              <Image
                source={require('../asserts/Images/Home/up-arrows.png')}
                style={styles.arrow}
              />
              <Text style={{color: '#FFFFFF', fontSize: 18, paddingLeft: 3}}>
                {weatherData.minTemp}&deg;
              </Text>
            </View>
          </View>

          <View>
            <Image
              source={{uri: `https:${weatherData.img}`}}
              style={styles.cloud}
            />
          </View>
        </View>

        <View>
          <Text style={styles.midText}>{weatherData.cmt}</Text>
          <View style={styles.border} />
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
          <View style={styles.border} />
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

      <Pressable onPress={() => navigation.navigate('LocationPage')}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../asserts/Images/Home/up-arrows.png')}
            style={{...styles.arrow, height: 30, width: 30}}
          />
        </View>
      </Pressable>

      {/* <Modal transparent={false} visible={modalVisible}>
        <LinearGradient
          style={{flex: 1}}
          colors={['#ABE9FF', '#7CB0FC', '#5B9CFA']}>
          <View>
            <Pressable onPress={() => setModalVisible(false)}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../asserts/Home/down-arrow.png')}
                  style={{...styles.arrow, width: 30, height: 30, opacity: 0.7}}
                />
              </View>
            </Pressable>
            <View style={{marginBottom: 30}}>
              <Text style={{...styles.date, fontSize: 25}}>Bangalore</Text>
              <Text style={styles.date}>India</Text>
            </View>

            <View>
              <View style={styles.border} />
              <FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View style={{alignItems: 'center', paddingHorizontal: 10}}>
                    <Text style={styles.data1}>{item.time}</Text>
                    <Text style={styles.data2}>{item.temp}&deg;</Text>
                  </View>
                )}
              />
              <View style={styles.border} />
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
                source={require('../asserts/Images/flash_model/sun.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={{color: '#FFFFFF'}}>84.2&deg;</Text>

              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  source={require('../asserts/Home/down-arrow.png')}
                  style={styles.arrow}
                />
                <Text style={{color: '#FFFFFF'}}>72.7&deg;</Text>
              </View>

              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  source={require('../asserts/Images/Home/up-arrows.png')}
                  style={styles.arrow}
                />
                <Text style={{color: '#FFFFFF'}}>98.2&deg;</Text>
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
                source={require('../asserts/Images/flash_model/rainy-day.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={{color: '#FFFFFF'}}>73.9&deg;</Text>

              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  source={require('../asserts/Home/down-arrow.png')}
                  style={styles.arrow}
                />
                <Text style={{color: '#FFFFFF'}}>72.7&deg;</Text>
              </View>

              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  source={require('../asserts/Images/Home/up-arrows.png')}
                  style={styles.arrow}
                />
                <Text style={{color: '#FFFFFF'}}>93.7&deg;</Text>
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
                source={require('../asserts/Images/flash_model/rainy-day.png')}
                style={{height: 30, width: 30}}
              />
              <Text style={{color: '#FFFFFF'}}>80.8&deg;</Text>

              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  source={require('../asserts/Home/down-arrow.png')}
                  style={styles.arrow}
                />
                <Text style={{color: '#FFFFFF'}}>72.9&deg;</Text>
              </View>

              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  source={require('../asserts/Images/Home/up-arrows.png')}
                  style={styles.arrow}
                />
                <Text style={{color: '#FFFFFF'}}>93.2&deg;</Text>
              </View>
            </View>

            <View>
              <FlatList
                data={DATA1}
                horizontal
                renderItem={({item}) => (
                  <View>
                    <Text style={styles.title}>{item.title1}</Text>
                    <Text style={styles.info}>{item.info1}</Text>
                  </View>
                )}
              />
            </View>

            <View>
              <FlatList
                data={DATA2}
                horizontal
                renderItem={({item}) => (
                  <View>
                    <Text style={styles.title}>{item.title2}</Text>
                    <Text style={styles.info}>{item.info2}</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </LinearGradient>
      </Modal> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  top_back: {
    width: '90%',
    backgroundColor: '#EFF1F3',
    borderRadius: 20,
    paddingLeft: 10,
    opacity: 0.5,
  },

  top_text: {
    color: '#FFFFFF',
    fontSize: 25,
    marginHorizontal: 12,
  },
  date: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
  arrow: {
    tintColor: 'white',
    height: 18,
    width: 18,
    marginLeft: 7,
  },
  cloud: {
    height: 130,
    width: 130,
  },
  border: {
    width: '100%',
    borderWidth: 0.3,
    borderColor: '#FFFFFF',
  },
  midText: {
    color: '#FFFFFF',
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 25,
    fontWeight: 'bold',
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

export default Home;
