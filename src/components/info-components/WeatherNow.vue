<template>
  <div class="weather__now">
    <div class="weather__temperature">
      {{ data && Math.round(data.main.temp) + '°' }}
    </div>
    <img class="weather__icon" :src="data && imgSrc" />
    <div class="weather__city">{{ data?.name }}</div>
    <div class="weather__add-location">
      <button class="weather__add-location-button" title="add to favorite" />
    </div>
  </div>
</template>

<script>
import * as api from '../../api';

export default {
  name: 'WeatherNow',
  props: {
    data: {
      type: [Object, null],
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return api.getIconUrl({ iconId: this.data.weather[0].icon });
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
