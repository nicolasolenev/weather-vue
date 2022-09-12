<template>
  <div class="container">
    <div class="weather">
      <Search />
      <div class="weather__container">
        <Info
          :data="data"
          :forecastData="forecastData"
          @add-location="addLocation"
        />
        <Locations
          @get-city="getData"
          :locations="locations"
          @delete-location="deleteLocation"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted } from 'vue';

import Search from './components/Search.vue';
import Info from './components/Info.vue';
import Locations from './components/Locations.vue';
import * as api from './api';

export default {
  name: 'App',
  components: {
    Search,
    Info,
    Locations,
  },
  data() {
    return {
      data: null,
      forecastData: null,
      location: '',
      locations: [],
    };
  },
  methods: {
    async getData(city) {
      const response = await fetch(
        api.getUrlByCity(api.API_TYPE.WEATHER, city)
      );
      const data = await response.json();
      this.data = data;

      const forecastResponse = await fetch(
        api.getUrlByCity(api.API_TYPE.FORECAST, city)
      );
      const forecastData = await forecastResponse.json();
      this.forecastData = forecastData;
    },
    addLocation(location) {
      if (this.locations.includes(location)) {
        return;
      }
      this.locations.push(location);
    },
    deleteLocation(location) {
      this.locations = this.locations.filter((city) => city !== location);
    },
  },
  setup() {
    onBeforeUnmount(() => {
      localStorage.setItem('weather-locations', JSON.stringify(this.locations));
    });
    onMounted(() => {
      console.log('mounted');
    });
  },
};
</script>

<style lang="scss">
@import '@/assets/variables.scss';

.container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.weather {
  display: flex;
  flex-direction: column;
  flex-basis: 600px;
  margin-top: 20px;
  border: $border;

  &__container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
