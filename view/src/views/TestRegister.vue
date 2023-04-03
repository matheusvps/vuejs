<template>
  <form @submit.prevent="enviar">
    <br />
    <label for="nota">Nota:</label>
    <input type="number" id="nota" v-model="nota" /><br />
    <br />
    <button type="submit">Cadastrar nota</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      aluno: {
        nome: "",
        id: "",
      },
      nota: null,
    };
  },
  methods: {
    enviar() {
      console.log(
        `Nota ${this.nota} cadastrada para o aluno ${this.aluno.nome} (ID ${this.aluno.id})`
      );
    },
  },
};
</script>
