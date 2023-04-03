import EstudanteService from "../services/StudentService.js";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    estudantes: [],
    estudanteAtual: null,
    notas: [],
    media: null,
    maiorNota: null,
    menorNota: null,
    quantidadeNotas: null,
  },
  mutations: {
    SET_ESTUDANTES(state, estudantes) {
      state.estudantes = estudantes;
    },
    SET_ESTUDANTE_ATUAL(state, estudante) {
      state.estudanteAtual = estudante;
      state.media = estudante.media;
      state.maiorNota = estudante.maiorNota;
      state.menorNota = estudante.menorNota;
      state.quantidadeNotas = estudante.notas.length;
    },
    SET_ESTUDANTE_NOME(state, nome) {
      state.estudanteAtual.nome = nome;
    },
    SET_QUANTIDADE_PROVAS(state, quantidadeProvas) {
      state.quantidadeProvas = quantidadeProvas;
    },
    SET_MEDIA(state, media) {
      state.media = media;
    },
    SET_MAIOR_NOTA(state, maiorNota) {
      state.maiorNota = maiorNota;
    },
    SET_MENOR_NOTA(state, menorNota) {
      state.menorNota = menorNota;
    },
    SET_QUANTIDADE_NOTAS(state, quantidadeNotas) {
      state.quantidadeNotas = quantidadeNotas;
    },
    SET_NOTAS(state, notas) {
      state.notas = notas;
    },
  },

  actions: {
    async buscarMediaMaioresMenoresNotas({ commit, state }) {
      const notas = state.notas;
      const quantidadeProvas = notas.length;
      const somaNotas = notas.reduce((total, nota) => total + nota, 0);
      const media = quantidadeProvas > 0 ? somaNotas / quantidadeProvas : null;
      const maiorNota = quantidadeProvas > 0 ? Math.max(...notas) : null;
      const menorNota = quantidadeProvas > 0 ? Math.min(...notas) : null;
      await commit("SET_MEDIA_MAIOR_MENOR_NOTAS", {
        media,
        maiorNota,
        menorNota,
        quantidadeProvas,
      });
    },
    async buscarEstudantePorNome({ commit, dispatch }, nome) {
      const response = await EstudanteService.buscarEstudantePorNome(nome);
      await commit("SET_ESTUDANTE_ATUAL", response.data);
      await commit("RESET_MEDIA_MAIORES_MENORES_NOTAS");
      if (response.data) {
        const id = response.data.id;
        await dispatch("buscarNotas", id);
        await dispatch("buscarMediaMaioresMenoresNotas");
      }
    },
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
    async buscarQuantidadeProvas({ commit }, id) {
      const response = await EstudanteService.obterNumeroNotas(id);
      await commit("SET_QUANTIDADE_PROVAS", response.data);
    },
    async buscarNotas({ commit }, id) {
      const response = await EstudanteService.buscarNotas(id);
      await commit("SET_NOTAS", response.data);
      await commit("SET_MAIOR_NOTA", Math.max(...response.data));
      await commit("SET_MENOR_NOTA", Math.min(...response.data));
    },
  },
});
