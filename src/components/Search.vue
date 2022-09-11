<template>
  <div class="search">
    <form class="search__form" @submit.prevent="onSubmit">
      <input
        class="search__input"
        type="text"
        placeholder="Aktobe"
        v-model="city"
      />

      <button class="search__button" title="get weather" />
    </form>
  </div>
</template>

<script>
import * as api from '../api';

export default {
  name: 'SearchField',
  data() {
    return {
      city: '',
    };
  },
  methods: {
    async onSubmit(e) {
      e.target.reset();
      const response = await fetch(
        api.getUrlByCity(api.API_TYPE.WEATHER, this.city)
      );
      const data = await response.json();
      this.$emit('set-data', data);

      const forecastResponse = await fetch(
        api.getUrlByCity(api.API_TYPE.FORECAST, this.city)
      );
      const forecastData = await forecastResponse.json();
      this.$emit('set-forecast-data', forecastData);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/variables.scss';

.search {
  height: 45px;

  &__form {
    display: flex;
    border-bottom: $border;
  }

  &__input {
    padding-left: 16px;
    flex-grow: 1;
    border: transparent;
    outline: none;
  }

  &__button {
    width: 60px;
    height: 45px;
    border: none;
    background: url('@/assets/images/search-ico.svg') no-repeat center;
    background-size: 25px 25px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      filter: opacity(0.4);
    }
  }
}
</style>
