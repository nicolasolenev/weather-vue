<template>
  <div class="weather__forecast" v-if="forecast">
    <h2 class="weather__forecast_city">{{ forecast.city.name }}</h2>

    <div class="weather__forecast_cards">
      <ForecastCard v-for="data of forecast.list" :key="data.dt" :data="data" />
    </div>
  </div>
</template>

<script>
import ForecastCard from './ForecastCard';

export default {
  name: 'WeatherForecast',

  components: {
    ForecastCard,
  },

  computed: {
    forecast() {
      return this.$store.state.data.forecast;
    },
  },
};
</script>

<style lang="scss">
.weather {
  &__forecast {
    width: 100%;

    &_city {
      font-size: 24px;
      line-height: 28px;
      margin: 33px 15px 10px;
    }

    &_cards {
      padding: 0 0 10px 0;
    }
  }
}
</style>
