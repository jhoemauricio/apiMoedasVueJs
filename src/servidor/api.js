//Configurações da Api

import axios from 'axios'

//variavel api recebe o axios
const api = axios.create({
    //url da api
    baseURL: 'https://economia.awesomeapi.com.br/json',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

  export default {
    all() {
        return api.get('/all');
    }
  }