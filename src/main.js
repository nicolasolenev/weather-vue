import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
import './assets/styles.scss';
import * as api from './api.js';

const store = createStore({
  state() {
    return {
      locations: ['Minsk', 'Moscow'],
      data: {
        weather: null,
        forecast: null,
      },
    };
  },
  mutations: {
    addLocation(state, location) {
      state.locations.push(location);
    },
    deleteLocation(state, location) {
      state.locations = state.locations.filter((item) => item !== location);
    },
    updateData(state, { weather, forecast }) {
      state.data.weather = weather;
      state.data.forecast = forecast;
    },
  },
  actions: {
    async getData(city) {
      const responseWeather = await fetch(
        api.getUrlByCity(api.API_TYPE.WEATHER, city)
      );
      const data = await responseWeather.json();
      this.data = data;

      const forecastResponse = await fetch(
        api.getUrlByCity(api.API_TYPE.FORECAST, city)
      );
      const forecastData = await forecastResponse.json();
      this.forecastData = forecastData;
    },
  },
});

createApp(App).use(store).mount('#app');
