console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    mailingList: [],
  },
  methods: {
    getMail() {
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((res) => {
        this.mailingList.push(res.data.response);
      });
    },
  },
  created() {
    for(let i = 0; i < 10; i++){
      this.getMail();
    }
  },
});
