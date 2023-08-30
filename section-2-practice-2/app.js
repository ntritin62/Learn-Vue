const app = Vue.createApp({
  data() {
    return {
      input: '',
    };
  },
  methods: {
    showAlert() {
      alert('Clicked!');
    },
    output(event) {
      this.input = event.target.value;
    },
  },
});

app.mount('#assignment');
