<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  background: #e5e5e5 url("./assets/github.svg") no-repeat 70% top;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

#app {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul,
ol {
  padding: 0;
  list-style: none;
}

.list {
  margin-top: 80px;
}

.list li {
  display: block;
  text-decoration: none;
}

.list li + li {
  margin-top: 16px;
}
</style>
