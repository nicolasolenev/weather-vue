<template>
  <div className="container">
    <div className="weather">
      <!-- <Search /> -->
      <div className="weather__container">
        <!-- <Info /> -->
        <!-- <Locations /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
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
