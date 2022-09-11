<template>
  <div class="weather__forecast">
    <h2 class="weather__forecast_city">{{ data?.city?.name }}</h2>

    <div class="weather__forecast_cards" v-if="data?.list">
      <ForecastCard v-for="data of data.list" :key="data.dt" :data="data" />
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
  props: {
    data: {
      type: [Object, null],
      required: true,
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
