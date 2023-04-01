import EstudanteService from "../services/StudentService.js";

export default {
  state: {
    estudantes: [],
    estudanteAtual: null,
    notas: [],
    media: null,
    maiorNota: null,
    menorNota: null,
    quantidadeNotas: null,
  },

  actions: {
    async criarEstudante({ commit }, estudante) {
      await EstudanteService.criarEstudante(estudante);
      await commit("SET_ESTUDANTE_ATUAL", estudante);
    },

    async atualizarEstudante({ commit }, estudante) {
      await EstudanteService.atualizarEstudante(estudante.id, estudante);
      await commit("SET_ESTUDANTE_ATUAL", estudante);
    },

    async deletarEstudante({ commit }, estudante) {
      await EstudanteService.deletarEstudante(estudante.id);
      await commit("SET_ESTUDANTE_ATUAL", null);
    },

    async buscarEstudantes({ commit }) {
      const response = await EstudanteService.buscarEstudantes();
      await commit("SET_ESTUDANTES", response.data);
    },

    async buscarEstudantePorId({ commit }, id) {
      const response = await EstudanteService.buscarEstudantePorId(id);
      await commit("SET_ESTUDANTE_ATUAL", response.data);
    },

    async calcularMedia({ commit }, id) {
      const response = await EstudanteService.calcularMedia(id);
      await commit("SET_MEDIA", response.data);
    },

    async adicionarNota({ commit }, { id, nota }) {
      await EstudanteService.adicionarNota(id, nota);
      const response = await EstudanteService.obterNumeroNotas(id);
      await commit("SET_QUANTIDADE_NOTAS", response.data);
      const response2 = await EstudanteService.buscarNotas(id);
      await commit("SET_NOTAS", response2.data);
    },

    async obterMaiorNota({ commit }, id) {
      const response = await EstudanteService.obterMaiorNota(id);
      await commit("SET_MAIOR_NOTA", response.data);
    },

    async obterMenorNota({ commit }, id) {
      const response = await EstudanteService.obterMenorNota(id);
      await commit("SET_MENOR_NOTA", response.data);
    },
  },
};
