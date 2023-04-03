<template>
  <div>
    <h1>Lista de Estudantes</h1>
    <ul>
      <li v-for="estudante in estudantes" :key="estudante.id">
        <router-link
          :to="{ name: 'DetalhesEstudante', params: { id: estudante.id } }"
          >{{ estudante.nome }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["estudantes"]),
    ...mapState(["estudantes"]),
  },
  async created() {
    await this.$store.dispatch("buscarEstudantes");
  },
};
</script>
