<template>
  <div>
    <div v-if="estudanteAtual">
      <h1>{{ estudanteAtual.nome }}</h1>
      <p>Média: {{ media }}</p>
      <p>Maior Nota: {{ maiorNota }}</p>
      <p>Menor Nota: {{ menorNota }}</p>
      <p>Quantidade de Provas: {{ quantidadeProvas }}</p>
    </div>
    <div v-else>Carregando estudante...</div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState([
      "estudanteAtual",
      "media",
      "maiorNota",
      "menorNota",
      "quantidadeProvas",
    ]),
  },
  methods: {
    ...mapActions(["buscarEstudantePorId", "buscarQuantidadeProvas"]),
    async buscarEstudante(id) {
      await this.buscarEstudantePorId(id);
      await this.buscarQuantidadeProvas(id);
    },
  },
  mounted() {
    this.buscarEstudante(1);
  },
};
</script>
