<template>
  <header>
    <img src="@/assets/logo.svg" alt="Github Explorer" />

    <router-link v-if="showButtonBack" tag="a" to="/">
      <img src="@/assets/icons/FiChevronLeft.svg" alt="fi chevron left" />
      Voltar
    </router-link>
  </header>
</template>

<script>
export default {
  props: {
    showButtonBack: {
      type: Boolean,
      default: () => false,
    },
  },
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    align-items: center;
    color: #a8a8b3;
    display: flex;
    text-decoration: none;
    transition: 0.2s ease-in-out color;

    &:hover {
      color: #666;
    }

    img {
      margin-right: 4px;
    }
  }
}
</style>
