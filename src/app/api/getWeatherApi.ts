import axios from "axios";

const apiKey = '149528b9bb644b59b1f191603242307';

const instance = axios.create({
    baseURL: 'https://api.weatherapi.com/v1/',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      key: apiKey
    }
});

export const getWeatherApi = {
    getWeatherData: async (city: string) => {
      return await instance.get('current.json', {
        params: {
          q: city,
          aqi: 'no'
        }
      });
    }
};