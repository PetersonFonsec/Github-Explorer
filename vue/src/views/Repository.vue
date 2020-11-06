<template>
  <div class="about">
    <global-header :showButtonBack="true" />

    <main>
      <repository-info :repository="repository" />
      <list-issues :link="true" :issues="issue" />
    </main>
  </div>
</template>

<script>
import GlobalHeader from "@/components/header.vue";
import RepositoryInfo from "@/components/repository-info";
import ListIssues from "@/components/list-issues.vue";
import RepositoryService from "@/services/repository.js";

export default {
  name: "Repository",
  components: { RepositoryInfo, ListIssues, GlobalHeader },
  data() {
    return {
      issue: [],
      repository: {},
    };
  },
  mounted() {
    const repository = `${this.$route.params.owner}/${this.$route.params.repository}`;

    RepositoryService.getRepositoryData(repository).then(({ data }) => {
      this.repository = data;
    });

    RepositoryService.getIssue(repository).then(({ data }) => {
      this.issue = data;
    });
  },
};
</script>
