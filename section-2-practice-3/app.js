const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter(value) {
      const that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet';
      } else if (this.counter > 37) {
        return 'Too much!';
      }
      return this.counter;
    },
  },
  methods: {
    increment() {
      this.counter++;
    },
    AddTo(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount('#assignment');
