<template>
  <div class="Dashboard">
    <global-header />
    <h2 class="title">Explore repositórios no Github.</h2>

    <main>
      <form-repository @submit="getRepository" />
      <list-repositories :repositories="repositories" />
    </main>
  </div>
</template>

<script>
import GlobalHeader from "@/components/header.vue";
import ListRepositories from "@/components/list-repositories.vue";
import FormRepository from "@/components/form-repository.vue";
import RepositoryService from "@/services/repository.js";

export default {
  name: "Dashboard",
  components: {
    FormRepository,
    ListRepositories,
    GlobalHeader,
  },
  data() {
    return {
      repositories: [],
    };
  },
  methods: {
    async getRepository(repository) {
      const repositories = await RepositoryService.getRepositoryData(
        repository
      );
      this.setRepositories([repositories.data]);
    },
    setRepositories(newRepository) {
      const repositories = [...this.repositories, ...newRepository];
      RepositoryService.setRepository(repositories);
      this.repositories = repositories;
    },
  },
  mounted() {
    this.repositories = RepositoryService.getLocalRepository();
  },
};
</script>

<style lang="scss">
.title {
  color: #3a3a3a;
  font-size: 48px;
  margin-top: 80px;
  max-width: 450px;
}
</style>
