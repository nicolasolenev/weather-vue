<template>
  <div class="weather__now" v-if="weather">
    <div class="weather__temperature">
      {{ Math.round(weather.main.temp) + '°' }}
    </div>
    <img class="weather__icon" :src="imgSrc" />
    <div class="weather__city">{{ weather.name }}</div>
    <div class="weather__add-location">
      <button
        v-if="isNotSaved"
        class="weather__add-location-button"
        title="add to favorite"
        @click="saveLocation"
      />
    </div>
  </div>
</template>

<script>
import * as api from '../../api';

export default {
  name: 'WeatherNow',

  computed: {
    imgSrc() {
      return this.weather
        ? api.getIconUrl({ iconId: this.weather.weather[0].icon })
        : '';
    },

    weather() {
      return this.$store.state.data.weather;
    },

    isNotSaved() {
      return !this.$store.state.locations.includes(this.weather.name);
    },
  },

  methods: {
    saveLocation() {
      this.$store.commit('addLocation', this.weather.name);
    },
  },
};
</script>

<style lang="scss">
.weather {
  &__now {
    width: 100%;
    position: relative;
  }

  &__temperature {
    font-size: 70px;
    line-height: 82px;
    margin: 20px 0 0 23px;
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }

  &__city {
    font-size: 24px;
    line-height: 28px;
    position: absolute;
    bottom: 17px;
    left: 12px;
    margin-left: 0;
  }

  &__add-location {
    position: absolute;
    right: 15px;
    bottom: 5px;
    transition: all 0.2s;

    &:hover {
      filter: opacity(0.4);
    }

    &-button {
      background: url('@/assets/images/heart-ico.svg') no-repeat center;
      border: transparent;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
}
</style>
