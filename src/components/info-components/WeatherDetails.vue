<template>
  <div className="weather__details" v-if="data">
    <ul className="weather__details_ul">
      <li className="weather__details_li weather__details_city">
        {{ data.name }}
      </li>
      <li className="weather__details_li">
        Temperature: {{ Math.round(data.main.temp) + '°' }}
      </li>
      <li className="weather__details_li">
        Feels like: {{ Math.round(data.main.feels_like) + '°' }}
      </li>
      <li className="weather__details_li">
        Weather: {{ data.weather[0].main }}
      </li>
      <li className="weather__details_li">
        Sunrise: {{ time(data.sys.sunrise) }}
      </li>
      <li className="weather__details_li">
        Sunset: {{ time(data.sys.sunset) }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getTime } from '../../helpers';

export default {
  name: 'WeatherDetails',

  methods: {
    time(dataTime) {
      return getTime(dataTime);
    },
  },

  computed: {
    data() {
      return this.$store.state.data.weather;
    },
  },
};
</script>

<style lang="scss">
.weather {
  &__details {
    width: 100%;

    &_ul {
      margin: 33px 0 0 15px;
    }

    &_li {
      list-style-type: none;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 14px;
    }

    &_city {
      margin-bottom: 42px;
    }
  }
}
</style>
