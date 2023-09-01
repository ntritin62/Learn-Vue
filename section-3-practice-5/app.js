const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      isVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    toggleList() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount('#assignment');
