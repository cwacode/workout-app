<template>
  <h1>Workout</h1>
  <header>
    <nav>
      <button v-for="category in categories" :key="category" @click="fetchExercises(category)">
        {{ category }}
      </button>
    </nav>
  </header>
  <div v-if="selectedExercise">
    <h2>{{ selectedExercise.exercise }}</h2>
    <p>{{ selectedExercise.description }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const categories = ref(['Back', 'Shoulders', 'Legs', 'Chest', 'Abs']);
    const selectedExercise = ref(null);

    function fetchExercises(category) {
      fetch(`/api/exercises/${category}`)
        .then((response) => response.json())
        .then((exercises) => {
          selectedExercise.value = exercises[0];
        })
        .catch((error) => {
          console.error('Error fetching exercises:', error);
        });
    }

    return {
      categories,
      selectedExercise,
      fetchExercises
    };
  },
};
</script>



<style scoped>
header {
  height: 50px;
}
</style>
