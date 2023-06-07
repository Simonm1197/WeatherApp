import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'http://api.weatherapi.com/v1/forecast.json?key=70deb1a1ef12492998c110428230506&q=',
});
// .then(response => {
//   console.log(response.data);
// });

export default axiosInstance;
