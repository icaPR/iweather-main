import { WeatherAPIResponseProps } from "@services/getWeatherByCityService";

const currentDay = new Date();
const nextDay = new Date();
nextDay.setDate(currentDay.getDate() + 1);

export const mockWeatherAPIResponse: WeatherAPIResponseProps = {
  list: [
    {
      pop: 0.5,
      main: {
        temp: 30,
        temp_min: 28,
        temp_max: 33,
        feels_like: 31,
        humidity: 0.5,
        temp_kf: 1,
      },
      wind: {
        speed: 15,
      },
      weather: [
        {
          description: "Céu limpo",
          main: "Clear",
        },
      ],
      dt_txt: nextDay.toDateString(),
    },
    {
      pop: 0.5,
      main: {
        temp: 31,
        temp_min: 30,
        temp_max: 34,
        feels_like: 32,
        humidity: 0.5,
        temp_kf: 1,
      },
      wind: {
        speed: 15,
      },
      weather: [
        {
          description: "Céu limpo",
          main: "Clear",
        },
      ],
      dt_txt: nextDay.toDateString(),
    },
  ],
};
