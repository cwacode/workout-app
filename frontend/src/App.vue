<template>
  <div>
    <h1>Workout</h1>
    <header>
      <nav>
        <CategoryButton
          v-for="category in categories"
          :key="category"
          :category="category"
          @onClick="fetchExercises"
        />
      </nav>
    </header>
    <div id="exercice-info" v-if="selectedExercise">
      <h2>{{ selectedExercise.exercise }}</h2>
      <p>{{ selectedExercise.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CategoryButton from './components/CategoryButton.vue';

interface Exercise {
  exercise: string;
  description: string;
}

export default defineComponent({
  components: {
    CategoryButton
  },
  setup() {
    const categories = ref(['Back', 'Shoulders', 'Legs', 'Chest', 'Abs']);
    const selectedExercise = ref<Exercise | null>(null);

    const fetchExercises = async (category: string) => {
      try {
        const response = await fetch(`http://localhost:3000/api/exercises/${category}`);
        const exercises: Exercise[] = await response.json();
        selectedExercise.value = exercises[0] || null;
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    return {
      categories,
      selectedExercise,
      fetchExercises,
    };
  },
});
</script>

<style scoped>
header {
  height: 50px;
}
#exercice-info {
  margin-top: 50px;
}
</style>
