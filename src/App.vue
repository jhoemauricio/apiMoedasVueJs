<template>
  <div class="container grid-lg my-22 py-2 text-dark">
    <div class="card">
      <div class="card-header">
        <div class="h4">Exibindo as Moedas</div>
      </div>

      <div class="card-body">
        <!-- importa dentro da aplicação o Hello World-->
        <hello-world :quotes="quotes"/>
      </div>
    </div>
  </div>
</template>

<script>
//importa o componente
import HelloWorld from "./components/HelloWorld.vue";

//importa o servidor
import api from "@/servidor/api.js";

//propriedades do vue
//reactive para dados reativos e toRefs para dados sobre referencia
import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },

  //propriedade setup
  //expoe os dados da API no component
  setup() {
    // quando usar reactive é obrigatorio passar um objeto
    //reactive lhe dar com objetos reativos
    const data = reactive({
      //dados reativos
      //quotes são as moedas
      quotes: {},
    });

    //onMounted é do tipo asycrono
    //no onMounted que se faz as requisições da API
    onMounted(async () => {
      //sempre que fizer requisicao do tipo async tem que esperar entao usao o await
      const response = await api.all();
      data.quotes = response.data;
    });

    // toRefs retorna os dados
    return { ...toRefs(data) };
  },
};


</script>

<style>
.h4 {
  text-align: center;
  margin-bottom: 10px;
}

.card {
  box-shadow: inset 0 0 1em gold, 0 0 1em red;
}
</style>
