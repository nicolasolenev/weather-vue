<template>
  <div class="locations">
    <h2 class="locations__title">Added Locations:</h2>

    <ul class="locations__ul">
      <li class="locations__li" v-for="location of locations" :key="location">
        <button
          class="locations__city"
          title="get weather"
          @click="getWeather(location)"
        >
          {{ location }}
        </button>

        <button
          class="locations__city_delete-button"
          title="delete city"
          @click="deleteLocation(location)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LocationsArea',
  props: {
    // locations: {
    //   type: Array,
    //   required: true,
    // },
  },
  computed: {
    locations() {
      return this.$store.state.locations;
    },
  },
  data() {
    return {};
  },
  methods: {
    getWeather(location) {
      this.$emit('get-city', location);
    },
    deleteLocation(location) {
      this.$emit('delete-location', location);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/variables.scss';

.locations {
  width: 50%;

  &__title {
    padding: 33px 18px 7px;
    border-bottom: $border;
    font-size: 24px;
    line-height: 28px;
  }

  &__ul {
    padding: 35px 25px 0px 20px;
    max-height: 319px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__li {
    list-style-type: none;
    margin: 0 0 14px 0;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    &:hover {
      .locations__city_delete-button {
        opacity: 1;
      }
    }
  }

  &__city {
    font-size: 24px;
    line-height: 28px;
    border: transparent;
    background: transparent;
    cursor: pointer;

    &_delete-button {
      width: 28px;
      height: 28px;
      border: transparent;
      background: url('@/assets/images/delete-ico.svg') no-repeat center;
      background-size: auto;
      filter: opacity(0.4);
      opacity: 0;
      cursor: pointer;

      &:hover {
        filter: opacity(1);
      }

      &:focus {
        opacity: 1;
        filter: opacity(1);
      }

      @media (max-width: 600px) {
        opacity: 1;
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
}
</style>
