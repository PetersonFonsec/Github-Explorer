<template>
  <div class="repository-info">
    <header class="repository-info__header">
      <img
        v-if="repository.owner"
        :src="repository.owner.avatar_url"
        :alt="repository.owner.login"
      />
      <div class="repository-info__container">
        <strong>{{ repository.full_name }}</strong>
        <p>{{ repository.description }}</p>
      </div>
    </header>
    <ul class="repository-info__list">
      <li>
        <strong>{{ repository.stargazers_count }}</strong>
        <span>Stars</span>
      </li>
      <li>
        <strong>{{ repository.forks_count }}</strong>
        <span>Forks</span>
      </li>
      <li>
        <strong>{{ repository.open_issues_count }}</strong>
        <span>Issues abertas</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RespositoryInfo",
  props: {
    repository: Object,
  },
};
</script>

<style lang="scss" scoped>
.repository-info {
  margin-top: 80px;

  &__header {
    align-items: center;
    display: flex;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }

  &__container {
    margin-left: 24px;

    strong {
      color: #3d3d4d;
      font-size: 36px;
    }

    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }

  &__list {
    display: flex;
    list-style: none;
    margin-top: 40px;

    strong {
      display: block;
      font-size: 36px;
      color: #3d3d4d;
    }

    span {
      display: block;
      margin-top: 4px;
      color: #6c6c8c;
    }

    li + li {
      margin-left: 80px;
    }
  }
}
</style>
