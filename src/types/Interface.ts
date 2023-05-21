interface Hour {
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}

interface CurrentData {
  current: {
    condition: {
      icon: string;
      text: string;
    };
    temp_c: number;
    humidity: number;
    wind_kph: number;
  };
  location: {
    name: string;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: number;
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          icon: string;
          text: string;
        };
      };
      hour: Hour[];
      astro: {
        sunrise: string;
        sunset: string;
      };
    }[];
  };
}

interface WeatherState {
  currentData: CurrentData;
  searchValue: string;
}

const initialState: WeatherState = {
  currentData: {
    current: {
      condition: {
        icon: "",
        text: "",
      },
      temp_c: 0,
      humidity: 0,
      wind_kph: 0,
    },
    location: {
      name: "",
    },
    forecast: {
      forecastday: [
        {
          date: "",
          day: {
            avgtemp_c: 0,
            maxtemp_c: 0,
            mintemp_c: 0,
            condition: {
              icon: "",
              text: "",
            },
          },
          hour: [],
          astro: {
            sunrise: "",
            sunset: "",
          },
        },
      ],
    },
  },
  searchValue: "Baku",
};

export interface DayDetailProps {
  day: {
    condition: {
      icon: string;
    };
    mintemp_c: number;
    maxtemp_c: number;
  };
  index: number;
  date: string;
}

export interface HourDetailProps {
  condition: {
    icon: string;
  };
  temp_c: number;
  curHour: number;
}
