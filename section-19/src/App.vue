<template>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    // const uName = ref('Tin');
    const uAge = ref(21);
    // const user = reactive({
    //   name: 'Tin',
    //   age: 21,
    // });
    const uName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], (newValues, oldValues) => {
      console.log(newValues);
      console.log(oldValues);
    });

    function setNewAge() {
      uAge.value = 32;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      // user: user,
      uName,
      age: uAge,
      setAge: setNewAge,
      lastName,
      firstName,
      setLastName,
      lastNameInput,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
