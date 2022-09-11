<template>
  <div class="weather__forecast_card">
    <div class="weather__forecast_date">{{ day(data.dt) }}</div>
    <div class="weather__forecast_time">{{ time(data.dt) }}</div>
    <div class="weather__forecast_options">
      <ul class="weather__forecast_options-ul">
        <li class="weather__forecast_options-li">
          Temperature: {{ Math.round(data.main.temp) }}°
        </li>
        <li class="weather__forecast_options-li">
          Feels like: {{ Math.round(data.main.feels_like) }}°
        </li>
      </ul>
    </div>
    <div class="weather__forecast_weather">
      <span class="weather__forecast_weather-span">
        {{ data.weather[0].main }}
      </span>
      <img
        class="weather__forecast_weather-icon"
        :src="imageSrc"
        alt="weather"
      />
    </div>
  </div>
</template>

<script>
import { getTime, getDay } from '../../helpers';
import { getIconUrl } from '@/api';

export default {
  name: 'WeatherForecastCard',
  props: {
    data: {
      type: [Object, null],
      required: true,
    },
  },
  methods: {
    time(dataTime) {
      return getTime(dataTime);
    },
    day(dataDay) {
      return getDay(dataDay);
    },
  },
  computed: {
    imageSrc() {
      return getIconUrl({
        iconId: this.data.weather[0].icon,
        isForecast: true,
      });
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/variables.scss';

.weather {
  &__forecast {
    &_card {
      flex-grow: 1;
      height: 120px;
      border: $border;
      margin: 9px 18px;
      position: relative;
    }

    &_date {
      position: absolute;
      top: 6px;
      left: 8px;
    }

    &_time {
      position: absolute;
      top: 6px;
      right: 12px;
    }

    &_options {
      position: absolute;
      bottom: 13px;
      left: 10px;

      &-li {
        list-style-type: none;
      }
    }

    &_weather {
      position: absolute;
      bottom: 10px;
      right: 9px;
      display: flex;
      flex-direction: column;

      &-span {
        line-height: 14px;
      }
    }
  }
}
</style>
