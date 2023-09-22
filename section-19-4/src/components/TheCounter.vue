<template>
  <h2>{{ counter }}</h2>
</template>

<script>
import { computed } from 'vuex';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    const counter = computed(() => {
      return store.getters.counter;
    });

    return { counter };
  },
};
</script>
