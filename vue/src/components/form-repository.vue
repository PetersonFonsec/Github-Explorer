<template>
  <div>
    <form @submit.prevent="submit">
      <input
        :class="{ error }"
        type="text"
        v-model="value"
        placeholder="Digite o nome do repositorio aqui"
      />
      <button type="submit">Pesquisar</button>
    </form>
    <span class="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "FormRepository",
  data() {
    return {
      value: "",
      error: "",
    };
  },
  methods: {
    reset() {
      this.error = "";
      this.value = "";
    },
    submit() {
      if (this.value) {
        this.$emit("submit", this.value);
        this.reset();
      } else {
        this.error = "Digite o autor/nome do repositório";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  margin-top: 40px;
  max-width: 700px;
}

input {
  border: 2px solid #fff;
  border-radius: 5px 0 0 5px;
  border-right: none;
  color: #a3a3a3;
  flex: 1;
  height: 70px;
  padding: 0 24px;
  font-family: Roboto;
  font-size: 20px;
  line-height: 23px;

  &.error {
    border-color: #c53030;
    color: #c53030;
    margin-top: 0;
  }

  &::placeholder {
    color: #a8a8b3;
  }
}

.error {
  color: #c53030;
  display: block;
  font-size: 16px;
  font-weight: 700;
  margin-top: 8px;
}

button {
  background: #04d361;
  border: none;
  border-radius: 0 5px 5px 0;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  height: 70px;
  line-height: 21px;
  transition: 0.2s ease-in-out background-color;
  width: 210px;

  &:hover {
    background: darken(#04d361, 20%);
  }
}
</style>
