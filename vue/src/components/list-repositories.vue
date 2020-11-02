<template>
  <ul class="list">
    <li v-for="repository in repositoriesInternal" :key="repository.full_name">
      <router-link :to="`/repositorio/${repository.full_name}`">
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
    link: Boolean,
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
