import React, {createContext, useCallback, useMemo, useState} from 'react';
// import axios from 'axios';

import axiosInstance from '../utils/axiosInstance';
// import AxiosInstance from '../utils/axiosInstance';

export const WeatherContext = createContext();

const ContextProvider = ({children}) => {
  const [loadproduct, setLoadProducrt] = useState([]);
  const [state, setState] = useState('Bangalore');
  const [weatherData, setWeatherData] = useState({
    Name: 'Bangalore',
    country: 'India',
    img: '//cdn.weatherapi.com/weather/64x64/day/143.png',
    temp: '34.0',
    minTemp: '20.3',
    maxTemp: '29.0',
    cmt: 'Partly cloudy',

    temp1: "32.9",
    img1: '//cdn.weatherapi.com/weather/64x64/day/113.png',
    maxTemp1: 36.8,
    minTemp1: 19.5,

    temp2: 29.9,
    img2: '//cdn.weatherapi.com/weather/64x64/day/176.png',
    maxTemp2: 32.6,
    minTemp2: 20.3,
  });

  const [duration, setDuration] = useState([
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
  ]);

  const [sunrise, setSunrise] = useState([
    {
      title: 'Sunrise',
      times: '05: 53 AM',
    },
    {
      title: 'Wind',
      times: '13 km/h',
    },
    {
      title: 'Precipitation',
      times: '0mm',
    },
  ]);

  const [sunset, setSunset] = useState([
    {
      title: 'Sunset',
      times: '06:53 PM',
    },
    {
      title: 'Pressure',
      times: '1016 mb',
    },
    {
      title: 'Humidity',
      times: '70%',
    },
  ]);

  const loadData = useCallback(async () => {
    try {
      const res = await axiosInstance.get(`${state}&days=3&aqi=no&alerts=no`);
      // setLoadProducrt(res.data);
      // console.log(res.data.forecast.forecastday[1].day.avgtemp_c);
      setWeatherData({
        Name: res.data.location.name,
        country: res.data.location.country,
        img: res.data.forecast.forecastday[0].day.condition.icon,
        temp: res.data.forecast.forecastday[0].hour[0].temp_c,
        maxTemp: res.data.forecast.forecastday[0].day.maxtemp_c,
        minTemp: res.data.forecast.forecastday[0].day.mintemp_c,
        temp1: res.data.forecast.forecastday[1].day.avgtemp_c,
        img1: res.data.forecast.forecastday[1].day.condition.icon,
        maxTemp1: res.data.forecast.forecastday[1].day.maxtemp_c,
        minTemp1: res.data.forecast.forecastday[1].day.mintemp_c,

        temp2: res.data.forecast.forecastday[2].day.avgtemp_c,
        img2: res.data.forecast.forecastday[2].day.condition.icon,
        maxTemp2: res.data.forecast.forecastday[2].day.maxtemp_c,
        minTemp2: res.data.forecast.forecastday[2].day.mintemp_c,

        cmt: res.data.forecast.forecastday[0].day.condition.text,
      });
      setDuration([
        {
          time: '12 AM',
          temp: res.data.forecast.forecastday[0].hour[0].temp_c,
        },
        {
          time: '1 AM',
          temp: res.data.forecast.forecastday[0].hour[1].temp_c,
        },
        {
          time: '2 AM',
          temp: res.data.forecast.forecastday[0].hour[2].temp_c,
        },
        {
          time: '3 AM',
          temp: res.data.forecast.forecastday[0].hour[3].temp_c,
        },
        {
          time: '4 AM',
          temp: res.data.forecast.forecastday[0].hour[4].temp_c,
        },
        {
          time: '5 AM',
          temp: res.data.forecast.forecastday[0].hour[5].temp_c,
        },
        {
          time: '6 AM',
          temp: res.data.forecast.forecastday[0].hour[6].temp_c,
        },
        {
          time: '7 AM',
          temp: res.data.forecast.forecastday[0].hour[7].temp_c,
        },
        {
          time: '8 AM',
          temp: res.data.forecast.forecastday[0].hour[8].temp_c,
        },
        {
          time: '9 AM',
          temp: res.data.forecast.forecastday[0].hour[9].temp_c,
        },
        {
          time: '10 AM',
          temp: res.data.forecast.forecastday[0].hour[10].temp_c,
        },
        {
          time: '11 AM',
          temp: res.data.forecast.forecastday[0].hour[11].temp_c,
        },
        {
          time: '12 AM',
          temp: res.data.forecast.forecastday[0].hour[12].temp_c,
        },
        {
          time: '1 PM',
          temp: res.data.forecast.forecastday[0].hour[13].temp_c,
        },
        {
          time: '2 PM',
          temp: res.data.forecast.forecastday[0].hour[14].temp_c,
        },
        {
          time: '3 PM',
          temp: res.data.forecast.forecastday[0].hour[15].temp_c,
        },
        {
          time: '4 PM',
          temp: res.data.forecast.forecastday[0].hour[16].temp_c,
        },
        {
          time: '5 PM',
          temp: res.data.forecast.forecastday[0].hour[17].temp_c,
        },
        {
          time: '6 PM',
          temp: res.data.forecast.forecastday[0].hour[18].temp_c,
        },
        {
          time: '7 PM',
          temp: res.data.forecast.forecastday[0].hour[19].temp_c,
        },
        {
          time: '8 PM',
          temp: res.data.forecast.forecastday[0].hour[20].temp_c,
        },
        {
          time: '9 PM',
          temp: res.data.forecast.forecastday[0].hour[21].temp_c,
        },
        {
          time: '10 PM',
          temp: res.data.forecast.forecastday[0].hour[22].temp_c,
        },
        {
          time: '11 PM',
          temp: res.data.forecast.forecastday[0].hour[23].temp_c,
        },
      ]);

      setSunrise([
        {
          title: 'Sunrise',
          times: res.data.forecast.forecastday[0].astro.sunrise,
        },
        {
          title: 'Wind',
          times: res.data.current.wind_kph + 'km/h',
        },
        {
          title: 'Precipitation',
          times: res.data.current.precip_mm + 'mm',
        },
      ]);

      setSunset([
        {
          title: 'Sunset',
          times: res.data.forecast.forecastday[0].astro.sunset,
        },
        {
          title: 'Pressure',
          times: res.data.current.pressure_mb + 'mb',
        },
        {
          title: 'Humidity',
          times: res.data.current.humidity + '%',
        },
      ]);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [state]);

  const value = useMemo(
    () => ({
      loadData,
      weatherData,
      state,
      setState,
      sunrise,
      duration,
      sunset,
    }),
    [
      loadData,
      loadproduct,
      weatherData,
      state,
      setState,
      duration,
      sunrise,
      sunset,
    ],
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default ContextProvider;
