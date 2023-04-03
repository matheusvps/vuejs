<template>
  <div>
    <h1>Adicionar Nota</h1>
    <form @submit.prevent="adicionarNota">
      <label>
        Nota:
        <input type="number" v-model="nota" required />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota: 0,
    };
  },
  methods: {
    adicionarNota() {
      const id = this.$route.params.id;
      this.$store
        .dispatch("adicionarNota", { id, nota: this.nota })
        .then(() => {
          this.$router.push({ name: "DetalhesEstudante", params: { id } });
        });
    },
  },
};
</script>
