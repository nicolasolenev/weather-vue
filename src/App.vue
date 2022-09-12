<template>
  <div class="container">
    <div class="weather">
      <Search />
      <div class="weather__container">
        <Info />
        <Locations />
      </div>
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import Info from './components/Info.vue';
import Locations from './components/Locations.vue';

export default {
  name: 'App',

  components: {
    Search,
    Info,
    Locations,
  },

  mounted() {
    this.$store.dispatch('fetchData', {
      location: this.$store.state.currentLocation,
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
