<template>
  <div className="search">
    <form className="search__form" @submit.prevent="onSubmit">
      <input
        className="search__input"
        type="text"
        placeholder="Aktobe"
        v-model="city"
      />

      <button className="search__button" title="get weather" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search-field',
  data() {
    return {
      city: '',
    };
  },
  methods: {
    onSubmit() {
      console.log(this.city);
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
    background: url(@/assets/images/search-ico.svg) no-repeat center;
    background-size: 25px 25px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      filter: opacity(0.4);
    }
  }
}
</style>
