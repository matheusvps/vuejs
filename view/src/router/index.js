import Vue from "vue";
import VueRouter from "vue-router";
import StudentList from "@/components/ListaAlunos.vue";
import StudentCard from "@/components/StudentCard.vue";
import HomeComp from "@/views/HomeComp.vue";
import StudentRegister from "@/views/AdicionarNota.vue";
import TestRegister from "@/views/TestRegister.vue";
//import DetalhesEstudante from "@/components/DetalhesEstudante.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComp,
    },
    {
      path: "/student-list",
      name: "studentList",
      component: StudentList,
    },
    // {
    //   path: "/estudantes/:id",
    //   name: "DetalhesEstudante",
    //   component: DetalhesEstudante,
    // },
    {
      path: "/student-show",
      name: "student-show",
      component: StudentCard,
    },
    {
      path: "/student-register",
      name: "student-register",
      component: StudentRegister,
    },
    {
      path: "/test-register",
      name: "test-register",
      component: TestRegister,
    },
  ],
});
