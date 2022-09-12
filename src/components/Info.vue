<template>
  <div class="info">
    <div class="info__content">
      <WeatherNow v-if="activeTab === tabs.now" />
      <WeatherDetails v-else-if="activeTab === tabs.details" />
      <WeatherForecast v-else />
    </div>

    <div class="info__tabs">
      <ul class="info__ul">
        <li class="info__li" v-for="tabName of tabs" :key="tabName">
          <TabButton
            :tabName="tabName"
            :isActive="activeTab === tabName"
            @open-tab="setActiveTab"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TabButton from './TabButton.vue';
import WeatherNow from './info-components/WeatherNow.vue';
import WeatherDetails from './info-components/WeatherDetails.vue';
import WeatherForecast from './info-components/WeatherForecast.vue';

export default {
  name: 'InfoComponent',

  components: {
    TabButton,
    WeatherNow,
    WeatherDetails,
    WeatherForecast,
  },

  data() {
    return {
      tabs: {
        now: 'Now',
        details: 'Details',
        forecast: 'Forecast',
      },
      activeTab: 'Now',
    };
  },

  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/variables.scss';

.info {
  display: flex;
  flex-direction: column;
  border-right: $border;
  width: 50%;

  &__content {
    display: flex;
    flex-grow: 1;
    flex-basis: 350px;
    position: relative;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__tabs {
    height: 45px;
  }

  &__ul {
    display: flex;
    width: 100%;
    border-top: $border;

    @media (max-width: 600px) {
      border-bottom: $border;
    }
  }

  &__li {
    width: 100%;
    list-style-type: none;
    border-left: $border;

    &:first-child {
      border-left: none;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 380px;
    border-right: none;
  }
}
</style>
