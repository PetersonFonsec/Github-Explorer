<template>
  <article class="bar-info">
    <img v-if="avatar" :src="avatar" :alt="alt" />
    <div>
      <strong>{{ title }}</strong>
      <p>{{ description }}</p>
    </div>
    <img
      class="arrow"
      src="@/assets/icons/FiChevronRight.svg"
      alt="Chevron Right"
    />
  </article>
</template>

<script>
export default {
  name: "BarInfo",
  props: {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: false,
    },
    alt: {
      type: String,
      require: false,
    },
  },
};
</script>

<style lang="scss" scoped>
article {
  align-items: center;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  max-width: 700px;
  opacity: 0.8;
  padding: 24px;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  width: 100%;

  &:hover {
    opacity: 1;
    transform: translateX(16px);
  }
}

img {
  border-radius: 50%;
  height: 64px;
  width: 64px;
}

div {
  flex: 1;
  margin: 0 16px;

  strong {
    color: #3d3d4d;
    font-size: 20px;
  }

  p {
    color: #a8a8b3;
    font-size: 18px;
    margin-top: 4px;
  }
}

.arrow {
  color: #cbcbd6;
  display: block;
  height: 14px;
  margin-left: auto;
  pointer-events: none;
  width: 14px;
}
</style>
