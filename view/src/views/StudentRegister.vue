<template>
  <form @submit.prevent="enviar">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" v-model="aluno.nome" /><br />

    <label for="idade">Idade:</label>
    <input type="number" id="idade" v-model="aluno.idade" /><br />

    <button type="submit">Enviar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      aluno: {
        nome: "",
        idade: null,
      },
    };
  },
  methods: {
    enviar() {
      console.log(this.aluno);
    },
  },
};
</script>
