<template>
  <ul class="list">
    <li v-for="issue in issuesInternal" :key="issue.full_name">
      <a :href="issue.html_url">
        <bar-info :title="issue.title" :description="issue.user.login" />
      </a>
    </li>
  </ul>
</template>

<script>
import BarInfo from "@/components/bar-info.vue";
export default {
  name: "ListIssue",
  components: {
    BarInfo,
  },
  props: {
    link: Boolean,
    issues: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      issuesInternal: [],
    };
  },
  watch: {
    issues(newValue) {
      return (this.issuesInternal = newValue);
    },
  },
  mounted() {
    this.issuesInternal = this.issues;
  },
};
</script>
