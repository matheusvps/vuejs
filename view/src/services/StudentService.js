import axios from "axios";

const API_URL = "http://localhost:8080/estudantes";

class EstudanteService {
  // Criar um estudante
  criarEstudante(estudante) {
    return axios.post(API_URL, estudante);
  }

  // Atualizar um estudante
  atualizarEstudante(id, dadosEstudante) {
    return axios.put(`${API_URL}/${id}`, dadosEstudante);
  }

  // Deletar um estudante
  deletarEstudante(id) {
    return axios.delete(`${API_URL}/${id}`);
  }

  // Buscar todos os estudantes
  buscarEstudantes() {
    return axios.get(API_URL);
  }

  // Buscar estudante por ID
  buscarEstudantePorId(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  // Calcular Média
  calcularMedia(id) {
    return axios.get(`${API_URL}/media/${id}`);
  }

  // Adicionar Nota
  adicionarNota(id, nota) {
    return axios.post(`${API_URL}/${id}/notas`, nota);
  }

  // Obter Maior Nota
  obterMaiorNota(id) {
    return axios.get(`${API_URL}/maiorNota/${id}`);
  }

  // Obter Menor Nota
  obterMenorNota(id) {
    return axios.get(`${API_URL}/menorNota/${id}`);
  }

  // Obter número de notas
  obterNumeroNotas(id) {
    return axios.get(`${API_URL}/numeroNotas/${id}`);
  }
}

export default new EstudanteService();
