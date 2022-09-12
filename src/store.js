import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import * as api from './api.js';

const store = createStore({
  state() {
    return {
      locations: [],
      currentLocation: 'Minsk',
      data: {
        weather: null,
        forecast: null,
      },
    };
  },

  plugins: [
    createPersistedState({
      key: 'weather-locations',
      paths: ['locations', 'currentLocation'],
    }),
  ],

  mutations: {
    addLocation(state, location) {
      state.locations.push(location);
    },
    deleteLocation(state, location) {
      state.locations = state.locations.filter((item) => item !== location);
    },
    setCurrentLocation(state, location) {
      state.currentLocation = location;
    },
    updateData(state, { weather, forecast }) {
      state.data.weather = weather;
      state.data.forecast = forecast;
    },
  },

  actions: {
    async fetchData({ commit }, { location }) {
      const responseWeather = await fetch(
        api.getUrlByCity(api.API_TYPE.WEATHER, location)
      );
      const dataWeather = await responseWeather.json();

      const forecastResponse = await fetch(
        api.getUrlByCity(api.API_TYPE.FORECAST, location)
      );
      const dataForecast = await forecastResponse.json();

      commit('updateData', { weather: dataWeather, forecast: dataForecast });
      commit('setCurrentLocation', dataWeather.name);
    },
  },
});

export default store;
