const app = Vue.createApp({
  data() {
    return {
      name: 'Nguyen Tri Tin',
      age: 21,
      FavNumber: Math.random(0, 1),
      imageUrl:
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    };
  },
});

app.mount('#assignment');
