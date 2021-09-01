console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    mail: '',
  },
  methods: {
  },
  created() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((res) => {
        this.mail = res.data.response;
        ;
      });
  },
 
});
