<template>
  <ul class="list-repositories">
    <li v-for="repository in repositoriesInternal" :key="repository.full_name">
      <router-link :to="`/repositorios/${repository.full_name}`">
        <bar-info
          :title="repository.full_name"
          :description="repository.description"
          :avatar="repository.owner.avatar_url"
          :alt="repository.owner.login"
        />
      </router-link>
    </li>
  </ul>
</template>

<script>
import BarInfo from "@/components/bar-info.vue";
export default {
  name: "ListRepositories",
  components: {
    BarInfo,
  },
  props: {
    repositories: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      repositoriesInternal: [],
    };
  },
  watch: {
    repositories(newValue) {
      return (this.repositoriesInternal = newValue);
    },
  },
  mounted() {
    this.repositoriesInternal = this.repositories;
  },
};
</script>

<style lang="scss" scoped>
.list-repositories {
  margin-top: 80px;

  li {
    display: block;
    text-decoration: none;
  }

  li + li {
    margin-top: 16px;
  }
}
</style>
