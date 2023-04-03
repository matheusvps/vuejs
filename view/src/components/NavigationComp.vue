<template>
  <div>
    <h1>Sistema Escolar</h1>
    <nav>
      <router-link :to="{ name: 'home' }"> Início | </router-link>
      <router-link :to="{ name: 'studentList' }">
        Lista de Alunos |
      </router-link>
      <router-link :to="{ name: 'student-register' }">
        Cadastrar Aluno
      </router-link>
      <router-view />
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
