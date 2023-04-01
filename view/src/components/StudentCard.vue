<template>
  <div>
    <h1>{{ estudante.nome }}</h1>
    <p>Média: {{ media }}</p>
    <p>Maior Nota: {{ maiorNota }}</p>
    <p>Menor Nota: {{ menorNota }}</p>
    <p>Quantidade de Provas: {{ quantidadeProvas }}</p>
    <button @click="adicionarNota()">Adicionar Nota</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estudante: {},
      media: 0,
      maiorNota: 0,
      menorNota: 0,
      quantidadeProvas: 0,
    };
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("buscarEstudantePorId", id).then((estudante) => {
      this.estudante = estudante;
      this.media = this.$store.getters.media(estudante.notas);
      this.maiorNota = this.$store.getters.maiorNota(estudante.notas);
      this.menorNota = this.$store.getters.menorNota(estudante.notas);
      this.quantidadeProvas = this.$store.getters.quantidadeProvas(
        estudante.notas
      );
    });
  },
  methods: {
    adicionarNota() {
      this.$router.push({
        name: "AdicionarNota",
        params: { id: this.estudante.id },
      });
    },
  },
};
</script>
