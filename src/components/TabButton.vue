<template>
  <button
    class="info__tabs_button"
    :class="{ 'info__tabs_button-active': isActive }"
    @click="onClick"
  >
    {{ tabName }}
  </button>
</template>

<script>
export default {
  name: 'TabButton',
  props: {
    tabName: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('open-tab', this.tabName);
    },
  },
};
</script>

<style lang="scss">
.info {
  &__tabs {
    &_button {
      width: 100%;
      height: 45px;
      border: transparent;
      cursor: pointer;
      background: transparent;

      &-active {
        background: #000;
        color: #fff;
      }
    }
  }
}
</style>
