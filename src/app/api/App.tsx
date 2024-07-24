import "./App.css";
import { useState } from "react";
import { getWeatherApi } from "./getWeatherApi";

function App() {

  const [data, setData] = useState(null);
  const [geo, setGeo] = useState<any>(null);

  const getData = async () => {
    const res = await getWeatherApi.getWeatherData('london');
    return setData(res.data);
  };


  function getUserLocation() {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error('Геолокация не поддерживается в вашем браузере.'));
      }
    });
  }
  
  const getGeoHanlder = () => {
    getUserLocation()
    .then((location) => {
      console.log('Геолокация пользователя:', location);
      setGeo(location);
    })
    .catch((error) => {
      console.error('Ошибка при получении геолокации:', error.message);
    });
  }
  

  console.log(data)

  return (
    <>
      <button onClick={getData}>get</button>
      <button onClick={getGeoHanlder}>geo</button>

    </>
  );
}

export default App;
